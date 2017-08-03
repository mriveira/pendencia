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

namespace Target.Pendencias.Api.Controllers
{
	[Authorize]
    [Route("api/comentariodocumento/more")]
    public class ComentarioDocumentoMoreController : Controller
    {

        private readonly IComentarioDocumentoRepository _rep;
        private readonly IComentarioDocumentoApplicationService _app;
		private readonly ILogger _logger;

        public ComentarioDocumentoMoreController(IComentarioDocumentoRepository rep, IComentarioDocumentoApplicationService app, ILoggerFactory logger)
        {
            this._rep = rep;
            this._app = app;
			this._logger = logger.CreateLogger<ComentarioDocumentoMoreController>();
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]ComentarioDocumentoFilter filters)
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

                throw new InvalidOperationException("invalid FilterBehavior");

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - ComentarioDocumento", filters);
            }
        }


        [HttpPost]
        public async Task<IActionResult> Post([FromBody]IEnumerable<ComentarioDocumentoDtoSpecialized> dtos)
        {
            var result = new HttpResult<ComentarioDocumentoDto>(this._logger);
            try
            {
                var returnModels = await this._app.Save(dtos);
                return result.ReturnCustomResponse(this._app, returnModels);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - ComentarioDocumento", dtos);
            }

        }

		[HttpPost]
        public async Task<IActionResult> Put([FromBody]IEnumerable<ComentarioDocumentoDtoSpecialized> dtos)
        {
            var result = new HttpResult<ComentarioDocumentoDto>(this._logger);
            try
            {
                var returnModels = await this._app.SavePartial(dtos);
                return result.ReturnCustomResponse(this._app, returnModels);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex, "Target.Pendencias - #className#>", dtos);
            }

        }

    }
}