using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class PendenciaBase : DomainBaseWithUserCreate
    {
        public PendenciaBase()
        {

        }
        public PendenciaBase(int projetoid, int pendenciaid, string resumo, int usuarioid, int pendenciatipoid, int fluxotrabalhostatusid, int pendenciaprioridadeid)
        {
            this.ProjetoId = projetoid;
            this.PendenciaId = pendenciaid;
            this.Resumo = resumo;
            this.UsuarioId = usuarioid;
            this.PendenciaTipoId = pendenciatipoid;
            this.FluxoTrabalhoStatusId = fluxotrabalhostatusid;
            this.PendenciaPrioridadeId = pendenciaprioridadeid;

        }

        public int ProjetoId { get; protected set; }
        public int PendenciaId { get; protected set; }
        public string Resumo { get; protected set; }
        public string Descricao { get; protected set; }
        public string RequisitadoPor { get; protected set; }
        public int? TempoEstimado { get; protected set; }
        public int? PontosEstimados { get; protected set; }
        public DateTime? Prazo { get; protected set; }
        public int UsuarioId { get; protected set; }
        public int PendenciaTipoId { get; protected set; }
        public int FluxoTrabalhoStatusId { get; protected set; }
        public int PendenciaPrioridadeId { get; protected set; }
        public string Tags { get; protected set; }
        public DateTime? DataConclusao { get; protected set; }


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
