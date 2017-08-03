using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class AcompanhadoresDtoSpecialized : AcompanhadoresDto
	{

        public  PendenciaDto Pendencia { get; set;}
        public int MyProperty { get; set; }


    }
}