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
    public class AcompanhadoresController : Controller
    {

        private readonly IAcompanhadoresApplicationService _app;
		private readonly ILogger _logger;


        public AcompanhadoresController(IAcompanhadoresApplicationService app, ILoggerFactory logger)
        {
            this._app = app;
			this._logger = logger.CreateLogger<AcompanhadoresController>();
			
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]AcompanhadoresFilter filters)
        {
            var result = new HttpResult<AcompanhadoresDto>(this._logger);
            try
            {
                var searchResult = await this._app.GetByFilters(filters);
                return result.ReturnCustomResponse(this._app, searchResult, filters);


            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Acompanhadores", filters);
            }

        }


        [HttpGet("{id}")]
		public async Task<IActionResult> Get(int id, [FromQuery]AcompanhadoresFilter filters)
		{
			var result = new HttpResult<AcompanhadoresDto>(this._logger);
            try
            {
				filters.PendenciaId = id;
                var returnModel = await this._app.GetOne(filters);
                return result.ReturnCustomResponse(this._app, returnModel);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Acompanhadores", id);
            }

		}




        [HttpPost]
        public async Task<IActionResult> Post([FromBody]AcompanhadoresDtoSpecialized dto)
        {
            var result = new HttpResult<AcompanhadoresDto>(this._logger);
            try
            {
                var returnModel = await this._app.Save(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Acompanhadores", dto);
            }
        }



        [HttpPut]
        public async Task<IActionResult> Put([FromBody]AcompanhadoresDtoSpecialized dto)
        {
            var result = new HttpResult<AcompanhadoresDto>(this._logger);
            try
            {
                var returnModel = await this._app.SavePartial(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Acompanhadores", dto);
            }
        }


        [HttpDelete]
        public async Task<IActionResult> Delete(AcompanhadoresDto dto)
        {
            var result = new HttpResult<AcompanhadoresDto>(this._logger);
            try
            {
                await this._app.Remove(dto);
                return result.ReturnCustomResponse(this._app);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Acompanhadores", dto);
            }
        }
    }
}
