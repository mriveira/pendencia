using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class PendenciaDocumento : PendenciaDocumentoBase
    {

        public PendenciaDocumento()
        {

        }

        public PendenciaDocumento(int pendenciaid, int documentoid) :
            base(pendenciaid, documentoid)
        {

        }

		public class PendenciaDocumentoFactory
        {
            public PendenciaDocumento GetDefaaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new PendenciaDocumento(data.PendenciaId,
                                        data.DocumentoId);



				return construction;
            }

        }

        public bool IsValid()
        {
            base._validationResult = new PendenciaDocumentoEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
