using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Target.Pendencias.Dto
{
	public class PendenciaTemposDtoSpecializedResult : PendenciaTemposDto
	{

        public double TempoDecorrido { get; set; }
        public string TempoDecorridoTimeSheet { get; set; }


    }
}