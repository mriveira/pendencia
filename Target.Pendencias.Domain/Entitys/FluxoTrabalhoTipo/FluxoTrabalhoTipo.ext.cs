using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class FluxoTrabalhoTipo : FluxoTrabalhoTipoBase
    {

        public FluxoTrabalhoTipo()
        {

        }

        public FluxoTrabalhoTipo(int fluxotrabalhotipoid, string nome) :
            base(fluxotrabalhotipoid, nome)
        {

        }

		public class FluxoTrabalhoTipoFactory
        {
            public FluxoTrabalhoTipo GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new FluxoTrabalhoTipo(data.FluxoTrabalhoTipoId,
                                        data.Nome);



				return construction;
            }

        }

        public bool IsValid()
        {
            base._validationResult = new FluxoTrabalhoTipoEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
