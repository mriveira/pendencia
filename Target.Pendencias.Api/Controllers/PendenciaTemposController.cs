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
    public class PendenciaTemposController : Controller
    {

        private readonly IPendenciaTemposApplicationService _app;
		private readonly ILogger _logger;
		private readonly IHostingEnvironment _env;
      
        public PendenciaTemposController(IPendenciaTemposApplicationService app, ILoggerFactory logger, IHostingEnvironment env)
        {
            this._app = app;
			this._logger = logger.CreateLogger<PendenciaTemposController>();
			this._env = env;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]PendenciaTemposFilter filters)
        {
            var result = new HttpResult<PendenciaTemposDto>(this._logger);
            try
            {
                var searchResult = await this._app.GetByFilters(filters);
                return result.ReturnCustomResponse(this._app, searchResult, filters);


            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendenciaTempos", filters);
            }

        }


        [HttpGet("{id}")]
		public async Task<IActionResult> Get(int id, [FromQuery]PendenciaTemposFilter filters)
		{
			var result = new HttpResult<PendenciaTemposDto>(this._logger);
            try
            {
				filters.PendenciaTemposId = id;
                var returnModel = await this._app.GetOne(filters);
                return result.ReturnCustomResponse(this._app, returnModel);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendenciaTempos", id);
            }

		}




        [HttpPost]
        public async Task<IActionResult> Post([FromBody]PendenciaTemposDtoSpecialized dto)
        {
            var result = new HttpResult<PendenciaTemposDto>(this._logger);
            try
            {
                var returnModel = await this._app.Save(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendenciaTempos", dto);
            }
        }



        [HttpPut]
        public async Task<IActionResult> Put([FromBody]PendenciaTemposDtoSpecialized dto)
        {
            var result = new HttpResult<PendenciaTemposDto>(this._logger);
            try
            {
                var returnModel = await this._app.SavePartial(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendenciaTempos", dto);
            }
        }


        [HttpDelete]
        public async Task<IActionResult> Delete(PendenciaTemposDto dto)
        {
            var result = new HttpResult<PendenciaTemposDto>(this._logger);
            try
            {
                await this._app.Remove(dto);
                return result.ReturnCustomResponse(this._app, dto);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendenciaTempos", dto);
            }
        }



    }
}
