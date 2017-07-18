using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class ComentarioDocumento : ComentarioDocumentoBase
    {

        public ComentarioDocumento()
        {

        }

        public ComentarioDocumento(int documentoid, int comentarioid) :
            base(documentoid, comentarioid)
        {

        }

		public class ComentarioDocumentoFactory
        {
            public ComentarioDocumento GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new ComentarioDocumento(data.DocumentoId,
                                        data.ComentarioId);



				return construction;
            }

        }

        public bool IsValid()
        {
            base._validationResult = new ComentarioDocumentoEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
