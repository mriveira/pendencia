using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;
using Target.Pendencias.Enums;
using System.Collections.Generic;
using System.Linq;
using Common.Domain;
using System.ComponentModel.DataAnnotations.Schema;


namespace Target.Pendencias.Domain.Entitys
{
    public class Pendencia : PendenciaBase
    {
        public virtual Projeto Projeto { get; set; }
        public virtual FluxoTrabalhoStatus FluxoTrabalhoStatus { get; set; }
        public virtual PendenciaTipo PendenciaTipo { get; set; }
        public virtual Usuario Usuario { get; set; }
        public virtual ICollection<PendenciaTempos> CollectionPendenciaTempos { get; set; }
        public virtual ICollection<Comentario> CollectionComentarios { get; private set; }
        public virtual ICollection<PendenciaEventos> CollectionPendenciaEventos { get; private set; }
        public virtual ICollection<PendenciaDocumento> CollectionPendenciaDocumento { get; private set; }

        [NotMapped]
        public string Nota { get; private set; }


        public Pendencia()
        {

        }

        public Pendencia(int pendenciaid, string resumo, int projetoid, int assinanteid, int pendenciatipoid, int fluxotrabalhostatusid, int pendenciaprioridadeid) :
            base(pendenciaid, resumo, projetoid, assinanteid, pendenciatipoid, fluxotrabalhostatusid, pendenciaprioridadeid)
        {

        }

        public class PendenciaFactory
        {
            public Pendencia GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new Pendencia(data.PendenciaId,
                                        data.Resumo,
                                        data.ProjetoId,
                                        data.UsuarioId,
                                        data.PendenciaTipoId,
                                        data.FluxoTrabalhoStatusId,
                                        data.PendenciaPrioridadeId);

                construction.SetarDescricao(data.Descricao);
                construction.SetarRequisitadoPor(data.RequisitadoPor);
                construction.SetarTempoEstimado(data.TempoEstimado);
                construction.SetarPontosEstimados(data.PontosEstimados);
                construction.SetarPrazo(data.Prazo);
                construction.SetarTags(data.Tags);
                construction.SetarDataConclusao(data.DataConclusao);
                construction.SetarComentarios(data.CollectionComentarios, user);
                construction.SetAttributeBehavior(data.AttributeBehavior);
                construction.SetarDocumento(data.Documento, user);

                return construction;
            }

            public Pendencia GetUpdateInstance(dynamic data, CurrentUser user)
            {
                var construction = new Pendencia(data.PendenciaId,
                                        data.Resumo,
                                        data.ProjetoId,
                                        data.UsuarioId,
                                        data.PendenciaTipoId,
                                        data.FluxoTrabalhoStatusId,
                                        data.PendenciaPrioridadeId);

                construction.SetarDescricao(data.Descricao);
                construction.SetarRequisitadoPor(data.RequisitadoPor);
                construction.SetarTempoEstimado(data.TempoEstimado);
                construction.SetarPontosEstimados(data.PontosEstimados);
                construction.SetarPrazo(data.Prazo);
                construction.SetarTags(data.Tags);
                construction.SetarDataConclusao(data.DataConclusao);
                construction.SetarComentarios(data.CollectionComentarios, user);
                construction.SetarNota(data.Nota);
                construction.SetarDocumento(data.Documento, user);
                construction.SetAttributeBehavior(data.AttributeBehavior);

                return construction;
            }

        }

        internal void Comentar(string comentario, CurrentUser user)
        {
            if (comentario.IsNullOrEmpty())
                return;

            if (this.CollectionComentarios.IsNotAny())
                this.CollectionComentarios = new List<Comentario>();

            this.CollectionComentarios.Add(new Comentario.ComentarioFactory().GetPendenciaInstance(new
            {
                ComentarioId = 0,
                Tipo = (int)ETipoComentario.Pessoal,
                Descricao = comentario,
                Data = DateTime.Now,
                PendenciaId = this.PendenciaId

            }, user));
        }

        internal void SetarNota(string nota)
        {
            this.Nota = nota;
        }

        internal void SetarDocumento(dynamic documento, CurrentUser user)
        {

            if (documento == null)
                return;

            if (this.CollectionPendenciaDocumento.IsNull())
                this.CollectionPendenciaDocumento = new List<PendenciaDocumento>();

            var _documento = new Documento(0, documento.Arquivo, documento.ext);
            _documento.SetUserCreate(user.GetSubjectId<int>());

            this.CollectionPendenciaDocumento.Add(new PendenciaDocumento
            {
                Documento = _documento
            });

        }

        internal void SetarComentarios(IEnumerable<dynamic> comentarios, CurrentUser user)
        {
            if (comentarios.IsAny())
            {
                foreach (var comentario in comentarios)
                    this.Comentar(comentario.Descricao, user);
            }
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
                   .GetPlayInstance(new
                   {
                       PendenciaId = this.PendenciaId,
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
                pendenciaEmAndamento.SetarFim(DateTime.Now.ToTimeZone());
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
                .GetDefaultInstance(new
                {
                    PendenciaEventosId = 0,
                    PendenciaId = this.PendenciaId,
                    Descricao = descricaoDoEvento,
                    Data = DateTime.Now,
                    AttributeBehavior = this.AttributeBehavior
                }, user));
        }

        public bool IsValid()
        {
            base._validationResult = new PendenciaEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }

    }
}
