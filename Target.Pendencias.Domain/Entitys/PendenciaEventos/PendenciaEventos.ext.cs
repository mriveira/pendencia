using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class PendenciaEventos : PendenciaEventosBase
    {

        public PendenciaEventos()
        {

        }

        public PendenciaEventos(int pendenciaeventosid, int pendenciaid, string descricao) :
            base(pendenciaeventosid, pendenciaid, descricao)
        {

        }

		public class PendenciaEventosFactory
        {
            public PendenciaEventos GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new PendenciaEventos(data.PendenciaEventosId,
                                        data.PendenciaId,
                                        data.Descricao);

                construction.SetarData(data.Data);


				return construction;
            }

        }

        public bool IsValid()
        {
            base._validationResult = new PendenciaEventosEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
