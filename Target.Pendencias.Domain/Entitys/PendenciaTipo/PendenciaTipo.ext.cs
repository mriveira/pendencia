using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class PendenciaTipo : PendenciaTipoBase
    {

        public PendenciaTipo()
        {

        }

        public PendenciaTipo(int pendenciatipoid, string nome) :
            base(pendenciatipoid, nome)
        {

        }

		public class PendenciaTipoFactory
        {
            public PendenciaTipo GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new PendenciaTipo(data.PendenciaTipoId,
                                        data.Nome);



				return construction;
            }

        }

        public bool IsValid()
        {
            base._validationResult = new PendenciaTipoEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
