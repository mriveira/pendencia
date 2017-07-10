using Common.Domain.Base;
using System;

namespace Target.Pendencias.Domain.Entitys
{
    public class TagsBase : DomainBase
    {
        public TagsBase()
        {

        }
        public TagsBase(int tagsid, string nome, int projetoid, int pendenciaid)
        {
            this.TagsId = tagsid;
            this.Nome = nome;
            this.ProjetoId = projetoid;
            this.PendenciaId = pendenciaid;

        }

        public int TagsId { get; protected set; }
        public string Nome { get; protected set; }
        public int ProjetoId { get; protected set; }
        public int PendenciaId { get; protected set; }




    }
}
