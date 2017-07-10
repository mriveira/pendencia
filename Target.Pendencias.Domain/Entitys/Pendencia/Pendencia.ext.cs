using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;
using Target.Pendencias.Enums;
using System.Collections.Generic;
using System.Linq;
using Common.Domain;

namespace Target.Pendencias.Domain.Entitys
{
    public class Pendencia : PendenciaBase
    {

        public Pendencia()
        {

        }

        public Pendencia(int projetoid, int pendenciaid, string resumo, int usuarioid, int pendenciatipoid, int fluxotrabalhostatusid, int pendenciaprioridadeid) : base(projetoid, pendenciaid, resumo, usuarioid, pendenciatipoid, fluxotrabalhostatusid, pendenciaprioridadeid)
        {
        }

        public class PendenciaFactory
        {
            public Pendencia GetDefaaultInstance(dynamic data, CurrentUser user)
            {

                var construction = new Pendencia(data.ProjetoId,
                                                data.PendenciaId,
                                                data.Resumo,
                                                data.UsuarioId,
                                                data.PendenciaTipoId,
                                                data.FluxoTrabalhoStatusId,
                                                data.PendenciaPrioridadeId);

                
                construction.SetarDescricao(data.Descricao);
                construction.SetarRequisitadoPor(data.RequisitadoPor);
                construction.SetarTempoEstimado(data.TempoEstimado);
                construction.SetarPontosEstimados(data.PontosEstimados);
                construction.SetarDataConclusao(data.DataConclusao);
                construction.SetarPrazo(data.Prazo);
                construction.SetarTags(data.Tags);


                return construction;
            }

        }

        public virtual Projeto Projeto { get; protected set; }

        public virtual PendenciaTipo PendenciaTipo { get; protected set; }

        public virtual FluxoTrabalhoStatus FluxoTrabalhoStatus { get; protected set; }

        public virtual Usuario Usuario { get; set; }

        public virtual ICollection<PendenciaTempos> CollectionPendenciaTempos { get; protected set; }

        public virtual ICollection<Comentario> CollectionComentarios { get; protected set; }

        public virtual ICollection<PendenciaEventos> CollectionPendenciaEventos { get; protected set; }

        public override void SetarDataConclusao(DateTime? dataconclusao)
        {
            this.DataConclusao = dataconclusao.IsNotNull() ? dataconclusao.Value.ToTimeZone().TodayZeroHours() : dataconclusao;
        }

        public override void SetarPrazo(DateTime? prazo)
        {
            this.Prazo = prazo.IsNotNull() ? prazo.Value.ToTimeZone() : prazo;
        }


        internal void Play(CurrentUser user)
        {

            this.registraEventoDeMudancaDeFluxoPara(user, EFluxoTrabalhoStatus.EmAndamento, "Play");
            this.FluxoTrabalhoStatusId = (int)EFluxoTrabalhoStatus.EmAndamento;
            this.SetarDataConclusao(null);

            var pendenciaEmAndamento = this.CollectionPendenciaTempos
                .Where(_ => _.Fim == null)
                .SingleOrDefault();

            if (pendenciaEmAndamento.IsNull())
            {
                if (this.CollectionPendenciaTempos.IsNotAny())
                    this.CollectionPendenciaTempos = new List<PendenciaTempos>();

                this.CollectionPendenciaTempos.Add(new PendenciaTempos.PendenciaTemposFactory()
                   .GetBasicInstance(new
                   {
                       PendenciaTemposId = 0,
                       PendenciaId = this.PendenciaId,
                       Inicio = DateTime.Now.ToTimeZone()
                   }, user));
            }


        }

        internal void Stop(string nota)
        {
            var pendenciaEmAndamento = this.CollectionPendenciaTempos
               .Where(_ => _.Fim == null)
               .SingleOrDefault();

            if (pendenciaEmAndamento.IsNotNull())
            {
                pendenciaEmAndamento.SetarFim(DateTime.Now);
                pendenciaEmAndamento.SetarNota(nota);
            }
        }

        internal void Reclassificar(string comentario, int fluxoTrabalhoStatusId, CurrentUser user)
        {


            this.registraEventoDeMudancaDeFluxoPara(user, (EFluxoTrabalhoStatus)fluxoTrabalhoStatusId, "Reclassificar");

            this.FluxoTrabalhoStatusId = fluxoTrabalhoStatusId;
            this.SetarDataConclusao(null);

            this.Comentar(comentario, user);

        }

        internal void Comentar(string comentario, CurrentUser user)
        {
            if (comentario.IsNullOrEmpty())
                return;

            if (this.CollectionComentarios.IsNotAny())
                this.CollectionComentarios = new List<Comentario>();

            this.CollectionComentarios.Add(new Comentario.ComentarioFactory().GetDefaaultInstance(new
            {
                ComentarioId = 0,
                Descricao = comentario,
                Data = DateTime.Now,
                UsuarioId = user.GetTenantId<int>(),
                PendenciaId = this.PendenciaId

            }, user));
        }

        internal void Concluir(string nota, string comentario, CurrentUser user)
        {

            this.registraEventoDeMudancaDeFluxoPara(user, EFluxoTrabalhoStatus.Pronto, "Concluir");
            this.FluxoTrabalhoStatusId = (int)EFluxoTrabalhoStatus.Pronto;
            this.SetarDataConclusao(DateTime.Now);
            this.Stop(nota);

            this.Comentar(comentario, user);
        }


        private void registraEventoDeMudancaDeFluxoPara(CurrentUser user, EFluxoTrabalhoStatus fluxoTrabalhoStatusIdFuturo, string processo)
        {
            var FluxoAtual = ((EFluxoTrabalhoStatus)this.FluxoTrabalhoStatusId).ToString();
            var FluxoFuturo = fluxoTrabalhoStatusIdFuturo.ToString();

            if (this.CollectionPendenciaEventos.IsNotAny())
                this.CollectionPendenciaEventos = new List<PendenciaEventos>();

            var descricaoDoEvento = $"No Processo de {processo}, Saiu de {FluxoAtual} e foi para {FluxoFuturo}.";
            this.CollectionPendenciaEventos
                .Add(new PendenciaEventos.PendenciaEventosFactory()
                .GetDefaaultInstance(new
                {
                    PendenciaEventosId = 0,
                    PendenciaId = this.PendenciaId,
                    Descricao = descricaoDoEvento,
                    Data = DateTime.Now

                }, user));
        }

        public bool IsValid()
        {
            base._validationResult = new PendenciaEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }

    }
}
