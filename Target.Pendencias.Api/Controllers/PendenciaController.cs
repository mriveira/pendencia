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
    public class PendenciaController : Controller
    {

        private readonly IPendenciaApplicationService _app;
		private readonly ILogger _logger;


        public PendenciaController(IPendenciaApplicationService app, ILoggerFactory logger)
        {
            this._app = app;
			this._logger = logger.CreateLogger<PendenciaController>();
			
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]PendenciaFilter filters)
        {
            var result = new HttpResult<PendenciaDto>(this._logger);
            try
            {
                var searchResult = await this._app.GetByFilters(filters);
                return result.ReturnCustomResponse(this._app, searchResult, filters);


            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Pendencia", filters);
            }

        }


        [HttpGet("{id}")]
		public async Task<IActionResult> Get(int id, [FromQuery]PendenciaFilter filters)
		{
			var result = new HttpResult<PendenciaDto>(this._logger);
            try
            {
				filters.PendenciaId = id;
                var returnModel = await this._app.GetOne(filters);
                return result.ReturnCustomResponse(this._app, returnModel);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Pendencia", id);
            }

		}




        [HttpPost]
        public async Task<IActionResult> Post([FromBody]PendenciaDtoSpecialized dto)
        {
            var result = new HttpResult<PendenciaDto>(this._logger);
            try
            {
                var returnModel = await this._app.Save(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Pendencia", dto);
            }
        }



        [HttpPut]
        public async Task<IActionResult> Put([FromBody]PendenciaDtoSpecialized dto)
        {
            var result = new HttpResult<PendenciaDto>(this._logger);
            try
            {
                var returnModel = await this._app.SavePartial(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Pendencia", dto);
            }
        }


        [HttpDelete]
        public async Task<IActionResult> Delete(PendenciaDto dto)
        {
            var result = new HttpResult<PendenciaDto>(this._logger);
            try
            {
                await this._app.Remove(dto);
                return result.ReturnCustomResponse(this._app, dto);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Pendencia", dto);
            }
        }
    }
}
