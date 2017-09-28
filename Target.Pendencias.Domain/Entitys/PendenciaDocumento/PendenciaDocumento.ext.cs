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

        public virtual Documento Documento { get; set; }

        public class PendenciaDocumentoFactory
        {
            public PendenciaDocumento GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new PendenciaDocumento(data.PendenciaId, data.DocumentoId);
                construction.AdicionarDocumento(new Documento(data.Documento.DocumentoId, data.Documento.Arquivo, data.Documento.ext), user);
                return construction;
            }

        }

        public bool IsValid()
        {
            base._validationResult = new PendenciaDocumentoEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }

        public void AdicionarDocumento(Documento documento,CurrentUser user)
        {

            this.Documento = documento;
            this.Documento.SetUserCreate(user.GetSubjectId<int>());
        }

    }
}
