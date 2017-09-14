using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Logging;
using Target.Pendencias.Application.Interfaces;
using Target.Pendencias.Domain.Filter;
using Target.Pendencias.Domain.Interfaces.Repository;
using Target.Pendencias.Dto;
using Common.Domain.Enums;
using Common.API;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Target.Pendencias.CrossCuting;
using Target.Pendencias.Domain.Entitys;

namespace Target.Pendencias.Api.Controllers
{
	[Authorize]
    [Route("api/fluxotrabalhotipo/more")]
    public class FluxoTrabalhoTipoMoreController : Controller
    {

        private readonly IFluxoTrabalhoTipoRepository _rep;
        private readonly IFluxoTrabalhoTipoApplicationService _app;
		private readonly ILogger _logger;

        public FluxoTrabalhoTipoMoreController(IFluxoTrabalhoTipoRepository rep, IFluxoTrabalhoTipoApplicationService app, ILoggerFactory logger)
        {
            this._rep = rep;
            this._app = app;
			this._logger = logger.CreateLogger<FluxoTrabalhoTipoMoreController>();
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]FluxoTrabalhoTipoFilter filters)
        {
            var result = new HttpResult<dynamic>(this._logger);
            try
            {
                if (filters.FilterBehavior == FilterBehavior.GetDataItem)
                {
                    var searchResult = await this._rep.GetDataItem(filters);
                    return result.ReturnCustomResponse(searchResult, filters);
                }

                if (filters.FilterBehavior == FilterBehavior.GetDataCustom)
                {
                    var searchResult = await this._rep.GetDataCustom(filters);
                    return result.ReturnCustomResponse(searchResult, filters);
                }

                if (filters.FilterBehavior == FilterBehavior.GetDataListCustom)
                {
                    var searchResult = await this._rep.GetDataListCustom(filters);
                    return result.ReturnCustomResponse(searchResult, filters);
                }
				
				if (filters.FilterBehavior == FilterBehavior.Export)
                {
					var searchResult = await this._rep.GetDataListCustom(filters);
                    var export = new ExportExcelCustom<dynamic>(filters);
                    var file = export.ExportFile(this.Response, searchResult, "FluxoTrabalhoTipo");
                    return File(file, export.ContentTypeExcel(), export.GetFileName());
                }

                throw new InvalidOperationException("invalid FilterBehavior");

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - FluxoTrabalhoTipo", filters);
            }
        }


        [HttpPost]
        public async Task<IActionResult> Post([FromBody]IEnumerable<FluxoTrabalhoTipoDtoSpecialized> dtos)
        {
            var result = new HttpResult<FluxoTrabalhoTipoDto>(this._logger);
            try
            {
                var returnModels = await this._app.Save(dtos);
                return result.ReturnCustomResponse(this._app, returnModels);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - FluxoTrabalhoTipo", dtos);
            }

        }

		[HttpPut]
        public async Task<IActionResult> Put([FromBody]IEnumerable<FluxoTrabalhoTipoDtoSpecialized> dtos)
        {
            var result = new HttpResult<FluxoTrabalhoTipoDto>(this._logger);
            try
            {
                var returnModels = await this._app.SavePartial(dtos);
                return result.ReturnCustomResponse(this._app, returnModels);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex, "Target.Pendencias - FluxoTrabalhoTipo", dtos);
            }

        }

    }
}
