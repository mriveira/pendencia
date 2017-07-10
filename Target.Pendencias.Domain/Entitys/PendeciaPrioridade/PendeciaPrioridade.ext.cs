using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class PendeciaPrioridade : PendeciaPrioridadeBase
    {

        public PendeciaPrioridade()
        {

        }

        public PendeciaPrioridade(int pendeciaprioridadeid, string nome) :
            base(pendeciaprioridadeid, nome)
        {

        }

		public class PendeciaPrioridadeFactory
        {
            public PendeciaPrioridade GetDefaaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new PendeciaPrioridade(data.PendeciaPrioridadeId,
                                        data.Nome);



				return construction;
            }

        }

        public bool IsValid()
        {
            base._validationResult = new PendeciaPrioridadeEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
