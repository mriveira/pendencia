using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;
using Common.Dto;

namespace Target.Pendencias.Dto
{
	public class FluxoTrabalhoTipoDtoSpecialized : FluxoTrabalhoTipoDto
	{

        public IEnumerable<FluxoTrabalhoStatusDto> CollectionFluxoTrabalhoStatus { get; set;}



    }
}