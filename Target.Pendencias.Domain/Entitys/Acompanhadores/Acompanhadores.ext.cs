using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;
using System.ComponentModel.DataAnnotations.Schema;

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

        [NotMapped]
        public int MyProperty { get; set; }

        public class AcompanhadoresFactory
        {
            public Acompanhadores GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new Acompanhadores(data.PendenciaId, user.GetSubjectId<int>());
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
