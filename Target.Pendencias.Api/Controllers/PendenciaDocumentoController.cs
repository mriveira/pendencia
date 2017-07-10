using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Logging;
using Target.Pendencias.Application.Interfaces;
using Target.Pendencias.Domain.Filter;
using Target.Pendencias.Dto;
using Common.API;
using System.Threading.Tasks;

namespace Target.Pendencias.Api.Controllers
{
	[Authorize]
    [Route("api/[controller]")]
    public class PendenciaDocumentoController : Controller
    {

        private readonly IPendenciaDocumentoApplicationService _app;
		private readonly ILogger _logger;


        public PendenciaDocumentoController(IPendenciaDocumentoApplicationService app, ILoggerFactory logger)
        {
            this._app = app;
			this._logger = logger.CreateLogger<PendenciaDocumentoController>();
			
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]PendenciaDocumentoFilter filters)
        {
            var result = new HttpResult<PendenciaDocumentoDto>(this._logger);
            try
            {
                var searchResult = await this._app.GetByFilters(filters);
                return result.ReturnCustomResponse(this._app, searchResult, filters);


            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendenciaDocumento", filters);
            }

        }


        [HttpGet("{id}")]



        [HttpPost]
        public async Task<IActionResult> Post([FromBody]PendenciaDocumentoDtoSpecialized dto)
        {
            var result = new HttpResult<PendenciaDocumentoDto>(this._logger);
            try
            {
                var returnModel = await this._app.Save(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendenciaDocumento", dto);
            }
        }



        [HttpPut]
        public async Task<IActionResult> Put([FromBody]PendenciaDocumentoDtoSpecialized dto)
        {
            var result = new HttpResult<PendenciaDocumentoDto>(this._logger);
            try
            {
                var returnModel = await this._app.SavePartial(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendenciaDocumento", dto);
            }
        }


        [HttpDelete]
        public async Task<IActionResult> Delete(PendenciaDocumentoDto dto)
        {
            var result = new HttpResult<PendenciaDocumentoDto>(this._logger);
            try
            {
                await this._app.Remove(dto);
                return result.ReturnCustomResponse(this._app);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendenciaDocumento", dto);
            }
        }
    }
}
