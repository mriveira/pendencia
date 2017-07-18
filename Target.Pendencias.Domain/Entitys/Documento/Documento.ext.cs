using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class Documento : DocumentoBase
    {

        public Documento()
        {

        }

        public Documento(int documentoid, string arquivo, string ext) :
            base(documentoid, arquivo, ext)
        {

        }

		public class DocumentoFactory
        {
            public Documento GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new Documento(data.DocumentoId,
                                        data.Arquivo,
                                        data.ext);



				return construction;
            }

        }

        public bool IsValid()
        {
            base._validationResult = new DocumentoEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
