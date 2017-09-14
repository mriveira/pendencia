using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class PendenciaBase : DomainBaseWithUserCreate
    {
        public PendenciaBase()
        {

        }
        public PendenciaBase(int pendenciaid, string resumo, int projetoid, int usuarioid, int pendenciatipoid, int fluxotrabalhostatusid, int pendenciaprioridadeid)
        {
            this.PendenciaId = pendenciaid;
            this.Resumo = resumo;
            this.ProjetoId = projetoid;
            this.UsuarioId = usuarioid;
            this.PendenciaTipoId = pendenciatipoid;
            this.FluxoTrabalhoStatusId = fluxotrabalhostatusid;
            this.PendenciaPrioridadeId = pendenciaprioridadeid;

        }

        public virtual int PendenciaId { get; protected set; }
        public virtual string Resumo { get; protected set; }
        public virtual string Descricao { get; protected set; }
        public virtual string RequisitadoPor { get; protected set; }
        public virtual int? TempoEstimado { get; protected set; }
        public virtual int? PontosEstimados { get; protected set; }
        public virtual DateTime? Prazo { get; protected set; }
        public virtual int ProjetoId { get; protected set; }
        public virtual int UsuarioId { get; protected set; }
        public virtual int PendenciaTipoId { get; protected set; }
        public virtual int FluxoTrabalhoStatusId { get; protected set; }
        public virtual int PendenciaPrioridadeId { get; protected set; }
        public virtual string Tags { get; protected set; }
        public virtual DateTime? DataConclusao { get; protected set; }


		public virtual void SetarDescricao(string descricao)
		{
			this.Descricao = descricao;
		}
		public virtual void SetarRequisitadoPor(string requisitadopor)
		{
			this.RequisitadoPor = requisitadopor;
		}
		public virtual void SetarTempoEstimado(int? tempoestimado)
		{
			this.TempoEstimado = tempoestimado;
		}
		public virtual void SetarPontosEstimados(int? pontosestimados)
		{
			this.PontosEstimados = pontosestimados;
		}
		public virtual void SetarPrazo(DateTime? prazo)
		{
			this.Prazo = prazo;
		}
		public virtual void SetarTags(string tags)
		{
			this.Tags = tags;
		}
		public virtual void SetarDataConclusao(DateTime? dataconclusao)
		{
			this.DataConclusao = dataconclusao;
		}


    }
}
