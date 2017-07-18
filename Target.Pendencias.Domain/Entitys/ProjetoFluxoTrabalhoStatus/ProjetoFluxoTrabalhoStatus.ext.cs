using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class ProjetoFluxoTrabalhoStatus : ProjetoFluxoTrabalhoStatusBase
    {

        public ProjetoFluxoTrabalhoStatus()
        {

        }

        public ProjetoFluxoTrabalhoStatus(int projetoid, int fluxotrabalhostatusid) :
            base(projetoid, fluxotrabalhostatusid)
        {

        }

		public class ProjetoFluxoTrabalhoStatusFactory
        {
            public ProjetoFluxoTrabalhoStatus GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new ProjetoFluxoTrabalhoStatus(data.ProjetoId,
                                        data.FluxoTrabalhoStatusId);



				return construction;
            }

        }

        public bool IsValid()
        {
            base._validationResult = new ProjetoFluxoTrabalhoStatusEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
