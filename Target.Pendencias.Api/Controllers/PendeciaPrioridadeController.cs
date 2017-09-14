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
    public class PendeciaPrioridadeController : Controller
    {

        private readonly IPendeciaPrioridadeApplicationService _app;
		private readonly ILogger _logger;
		private readonly IHostingEnvironment _env;
      
        public PendeciaPrioridadeController(IPendeciaPrioridadeApplicationService app, ILoggerFactory logger, IHostingEnvironment env)
        {
            this._app = app;
			this._logger = logger.CreateLogger<PendeciaPrioridadeController>();
			this._env = env;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]PendeciaPrioridadeFilter filters)
        {
            var result = new HttpResult<PendeciaPrioridadeDto>(this._logger);
            try
            {
                var searchResult = await this._app.GetByFilters(filters);
                return result.ReturnCustomResponse(this._app, searchResult, filters);


            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendeciaPrioridade", filters);
            }

        }


        [HttpGet("{id}")]
		public async Task<IActionResult> Get(int id, [FromQuery]PendeciaPrioridadeFilter filters)
		{
			var result = new HttpResult<PendeciaPrioridadeDto>(this._logger);
            try
            {
				filters.PendeciaPrioridadeId = id;
                var returnModel = await this._app.GetOne(filters);
                return result.ReturnCustomResponse(this._app, returnModel);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendeciaPrioridade", id);
            }

		}




        [HttpPost]
        public async Task<IActionResult> Post([FromBody]PendeciaPrioridadeDtoSpecialized dto)
        {
            var result = new HttpResult<PendeciaPrioridadeDto>(this._logger);
            try
            {
                var returnModel = await this._app.Save(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendeciaPrioridade", dto);
            }
        }



        [HttpPut]
        public async Task<IActionResult> Put([FromBody]PendeciaPrioridadeDtoSpecialized dto)
        {
            var result = new HttpResult<PendeciaPrioridadeDto>(this._logger);
            try
            {
                var returnModel = await this._app.SavePartial(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendeciaPrioridade", dto);
            }
        }


        [HttpDelete]
        public async Task<IActionResult> Delete(PendeciaPrioridadeDto dto)
        {
            var result = new HttpResult<PendeciaPrioridadeDto>(this._logger);
            try
            {
                await this._app.Remove(dto);
                return result.ReturnCustomResponse(this._app, dto);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendeciaPrioridade", dto);
            }
        }



    }
}
