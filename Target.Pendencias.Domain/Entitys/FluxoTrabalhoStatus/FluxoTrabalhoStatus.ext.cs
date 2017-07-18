using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class FluxoTrabalhoStatus : FluxoTrabalhoStatusBase
    {

        public FluxoTrabalhoStatus()
        {

        }

        public FluxoTrabalhoStatus(int fluxotrabalhostatusid, string nome, int fluxotrabalhotipoid) :
            base(fluxotrabalhostatusid, nome, fluxotrabalhotipoid)
        {

        }

		public class FluxoTrabalhoStatusFactory
        {
            public FluxoTrabalhoStatus GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new FluxoTrabalhoStatus(data.FluxoTrabalhoStatusId,
                                        data.Nome,
                                        data.FluxoTrabalhoTipoId);

                construction.SetarCorFundo(data.CorFundo);
                construction.SetarCorFonte(data.CorFonte);
                construction.SetarOrdem(data.Ordem);


                return construction;
            }

        }

        public bool IsValid()
        {
            base._validationResult = new FluxoTrabalhoStatusEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
