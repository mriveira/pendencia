using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class Acompanhadores : AcompanhadoresBase
    {

        public Acompanhadores()
        {

        }

        public Acompanhadores(int pendenciaid, int usuarioid) :
            base(pendenciaid, usuarioid)
        {

        }

		public class AcompanhadoresFactory
        {
            public Acompanhadores GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new Acompanhadores(data.PendenciaId,
                                        data.UsuarioId);



				return construction;
            }

        }

        public bool IsValid()
        {
            base._validationResult = new AcompanhadoresEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
