using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class Tags : TagsBase
    {

        public Tags()
        {

        }

        public Tags(int tagsid, string nome, int projetoid, int pendenciaid) :
            base(tagsid, nome, projetoid, pendenciaid)
        {

        }

		public class TagsFactory
        {
            public Tags GetDefaaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new Tags(data.TagsId,
                                        data.Nome,
                                        data.ProjetoId,
                                        data.PendenciaId);



				return construction;
            }

        }

        public bool IsValid()
        {
            base._validationResult = new TagsEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
