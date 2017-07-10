using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class ComentarioBase : DomainBaseWithUserCreate
    {
        public ComentarioBase()
        {

        }
        public ComentarioBase(int comentarioid, string descricao, DateTime data, int usuarioid, int pendenciaid)
        {
            this.ComentarioId = comentarioid;
            this.Descricao = descricao;
            this.Data = data;
            this.UsuarioId = usuarioid;
            this.PendenciaId = pendenciaid;

        }

        public int ComentarioId { get; protected set; }
        public string Descricao { get; protected set; }
        public DateTime Data { get; protected set; }
        public int UsuarioId { get; protected set; }
        public int PendenciaId { get; protected set; }




    }
}
