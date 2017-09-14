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
using Microsoft.AspNetCore.Hosting;

namespace Target.Pendencias.Api.Controllers
{
	[Authorize]
    [Route("api/[controller]")]
    public class ComentarioDocumentoController : Controller
    {

        private readonly IComentarioDocumentoApplicationService _app;
		private readonly ILogger _logger;
		private readonly IHostingEnvironment _env;
      
        public ComentarioDocumentoController(IComentarioDocumentoApplicationService app, ILoggerFactory logger, IHostingEnvironment env)
        {
            this._app = app;
			this._logger = logger.CreateLogger<ComentarioDocumentoController>();
			this._env = env;
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
		public async Task<IActionResult> Get(int id, [FromQuery]ComentarioDocumentoFilter filters)
		{
			var result = new HttpResult<ComentarioDocumentoDto>(this._logger);
            try
            {
				filters.DocumentoId = id;
                var returnModel = await this._app.GetOne(filters);
                return result.ReturnCustomResponse(this._app, returnModel);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - ComentarioDocumento", id);
            }

		}




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
                return result.ReturnCustomResponse(this._app, dto);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - ComentarioDocumento", dto);
            }
        }



    }
}
