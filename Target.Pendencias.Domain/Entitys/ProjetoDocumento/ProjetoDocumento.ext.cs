using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class ProjetoDocumento : ProjetoDocumentoBase
    {

        public ProjetoDocumento()
        {

        }

        public ProjetoDocumento(int projetoid, int documentoid) :
            base(projetoid, documentoid)
        {

        }

        public virtual Documento Documento { get; set; }

        public class ProjetoDocumentoFactory
        {
            public ProjetoDocumento GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new ProjetoDocumento(data.ProjetoId,data.DocumentoId);
                var documento = new Documento(data.Documento.DocumentoId, data.Documento.Arquivo, data.Documento.ext);
                documento.SetarTags(data.Documento.Tags);
                construction.AdicionarDocumento(documento, user);
                construction.SetAttributeBehavior(data.AttributeBehavior);
        		return construction;
            }

        }

        private void AdicionarDocumento(Documento documento, CurrentUser user)
        {
            this.Documento = documento;
            this.Documento.SetUserCreate(user.GetSubjectId<int>());

        }

        public bool IsValid()
        {
            base._validationResult = new ProjetoDocumentoEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
