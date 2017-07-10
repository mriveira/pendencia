using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class UsuarioTipo : UsuarioTipoBase
    {

        public UsuarioTipo()
        {

        }

        public UsuarioTipo(int usuariotipoid, string nome) :
            base(usuariotipoid, nome)
        {

        }

		public class UsuarioTipoFactory
        {
            public UsuarioTipo GetDefaaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new UsuarioTipo(data.UsuarioTipoId,
                                        data.Nome);



				return construction;
            }

        }

        public bool IsValid()
        {
            base._validationResult = new UsuarioTipoEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
