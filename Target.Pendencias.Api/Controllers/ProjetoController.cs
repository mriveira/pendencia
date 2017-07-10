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
    public class ProjetoController : Controller
    {

        private readonly IProjetoApplicationService _app;
		private readonly ILogger _logger;


        public ProjetoController(IProjetoApplicationService app, ILoggerFactory logger)
        {
            this._app = app;
			this._logger = logger.CreateLogger<ProjetoController>();
			
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]ProjetoFilter filters)
        {
            var result = new HttpResult<ProjetoDto>(this._logger);
            try
            {
                var searchResult = await this._app.GetByFilters(filters);
                return result.ReturnCustomResponse(this._app, searchResult, filters);


            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Projeto", filters);
            }

        }


        [HttpGet("{id}")]
		public async Task<IActionResult> Get(int id, [FromQuery]ProjetoFilter filters)
		{
			var result = new HttpResult<ProjetoDto>(this._logger);
            try
            {
				filters.ProjetoId = id;
                var returnModel = await this._app.GetOne(filters);
                return result.ReturnCustomResponse(this._app, returnModel);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Projeto", id);
            }

		}




        [HttpPost]
        public async Task<IActionResult> Post([FromBody]ProjetoDtoSpecialized dto)
        {
            var result = new HttpResult<ProjetoDto>(this._logger);
            try
            {
                var returnModel = await this._app.Save(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Projeto", dto);
            }
        }



        [HttpPut]
        public async Task<IActionResult> Put([FromBody]ProjetoDtoSpecialized dto)
        {
            var result = new HttpResult<ProjetoDto>(this._logger);
            try
            {
                var returnModel = await this._app.SavePartial(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Projeto", dto);
            }
        }


        [HttpDelete]
        public async Task<IActionResult> Delete(ProjetoDto dto)
        {
            var result = new HttpResult<ProjetoDto>(this._logger);
            try
            {
                await this._app.Remove(dto);
                return result.ReturnCustomResponse(this._app);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Projeto", dto);
            }
        }
    }
}
