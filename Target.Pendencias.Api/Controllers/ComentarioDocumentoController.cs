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
    public class ComentarioDocumentoController : Controller
    {

        private readonly IComentarioDocumentoApplicationService _app;
		private readonly ILogger _logger;


        public ComentarioDocumentoController(IComentarioDocumentoApplicationService app, ILoggerFactory logger)
        {
            this._app = app;
			this._logger = logger.CreateLogger<ComentarioDocumentoController>();
			
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]ComentarioDocumentoFilter filters)
        {
            var result = new HttpResult<ComentarioDocumentoDto>(this._logger);
            try
            {
                var searchResult = await this._app.GetByFilters(filters);
                return result.ReturnCustomResponse(this._app, searchResult, filters);


            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - ComentarioDocumento", filters);
            }

        }


        [HttpGet("{id}")]



        [HttpPost]
        public async Task<IActionResult> Post([FromBody]ComentarioDocumentoDtoSpecialized dto)
        {
            var result = new HttpResult<ComentarioDocumentoDto>(this._logger);
            try
            {
                var returnModel = await this._app.Save(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - ComentarioDocumento", dto);
            }
        }



        [HttpPut]
        public async Task<IActionResult> Put([FromBody]ComentarioDocumentoDtoSpecialized dto)
        {
            var result = new HttpResult<ComentarioDocumentoDto>(this._logger);
            try
            {
                var returnModel = await this._app.SavePartial(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - ComentarioDocumento", dto);
            }
        }


        [HttpDelete]
        public async Task<IActionResult> Delete(ComentarioDocumentoDto dto)
        {
            var result = new HttpResult<ComentarioDocumentoDto>(this._logger);
            try
            {
                await this._app.Remove(dto);
                return result.ReturnCustomResponse(this._app);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - ComentarioDocumento", dto);
            }
        }
    }
}
