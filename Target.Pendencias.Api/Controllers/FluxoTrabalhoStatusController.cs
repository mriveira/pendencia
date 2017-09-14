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
    public class FluxoTrabalhoStatusController : Controller
    {

        private readonly IFluxoTrabalhoStatusApplicationService _app;
		private readonly ILogger _logger;
		private readonly IHostingEnvironment _env;
      
        public FluxoTrabalhoStatusController(IFluxoTrabalhoStatusApplicationService app, ILoggerFactory logger, IHostingEnvironment env)
        {
            this._app = app;
			this._logger = logger.CreateLogger<FluxoTrabalhoStatusController>();
			this._env = env;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]FluxoTrabalhoStatusFilter filters)
        {
            var result = new HttpResult<FluxoTrabalhoStatusDto>(this._logger);
            try
            {
                var searchResult = await this._app.GetByFilters(filters);
                return result.ReturnCustomResponse(this._app, searchResult, filters);


            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - FluxoTrabalhoStatus", filters);
            }

        }


        [HttpGet("{id}")]
		public async Task<IActionResult> Get(int id, [FromQuery]FluxoTrabalhoStatusFilter filters)
		{
			var result = new HttpResult<FluxoTrabalhoStatusDto>(this._logger);
            try
            {
				filters.FluxoTrabalhoStatusId = id;
                var returnModel = await this._app.GetOne(filters);
                return result.ReturnCustomResponse(this._app, returnModel);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - FluxoTrabalhoStatus", id);
            }

		}




        [HttpPost]
        public async Task<IActionResult> Post([FromBody]FluxoTrabalhoStatusDtoSpecialized dto)
        {
            var result = new HttpResult<FluxoTrabalhoStatusDto>(this._logger);
            try
            {
                var returnModel = await this._app.Save(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - FluxoTrabalhoStatus", dto);
            }
        }



        [HttpPut]
        public async Task<IActionResult> Put([FromBody]FluxoTrabalhoStatusDtoSpecialized dto)
        {
            var result = new HttpResult<FluxoTrabalhoStatusDto>(this._logger);
            try
            {
                var returnModel = await this._app.SavePartial(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - FluxoTrabalhoStatus", dto);
            }
        }


        [HttpDelete]
        public async Task<IActionResult> Delete(FluxoTrabalhoStatusDto dto)
        {
            var result = new HttpResult<FluxoTrabalhoStatusDto>(this._logger);
            try
            {
                await this._app.Remove(dto);
                return result.ReturnCustomResponse(this._app, dto);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - FluxoTrabalhoStatus", dto);
            }
        }



    }
}
