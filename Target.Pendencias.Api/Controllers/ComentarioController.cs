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
    public class ComentarioController : Controller
    {

        private readonly IComentarioApplicationService _app;
		private readonly ILogger _logger;


        public ComentarioController(IComentarioApplicationService app, ILoggerFactory logger)
        {
            this._app = app;
			this._logger = logger.CreateLogger<ComentarioController>();
			
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]ComentarioFilter filters)
        {
            var result = new HttpResult<ComentarioDto>(this._logger);
            try
            {
                var searchResult = await this._app.GetByFilters(filters);
                return result.ReturnCustomResponse(this._app, searchResult, filters);


            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Comentario", filters);
            }

        }


        [HttpGet("{id}")]
		public async Task<IActionResult> Get(int id, [FromQuery]ComentarioFilter filters)
		{
			var result = new HttpResult<ComentarioDto>(this._logger);
            try
            {
				filters.ComentarioId = id;
                var returnModel = await this._app.GetOne(filters);
                return result.ReturnCustomResponse(this._app, returnModel);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Comentario", id);
            }

		}




        [HttpPost]
        public async Task<IActionResult> Post([FromBody]ComentarioDtoSpecialized dto)
        {
            var result = new HttpResult<ComentarioDto>(this._logger);
            try
            {
                var returnModel = await this._app.Save(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Comentario", dto);
            }
        }



        [HttpPut]
        public async Task<IActionResult> Put([FromBody]ComentarioDtoSpecialized dto)
        {
            var result = new HttpResult<ComentarioDto>(this._logger);
            try
            {
                var returnModel = await this._app.SavePartial(dto);
                return result.ReturnCustomResponse(this._app, returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Comentario", dto);
            }
        }


        [HttpDelete]
        public async Task<IActionResult> Delete(ComentarioDto dto)
        {
            var result = new HttpResult<ComentarioDto>(this._logger);
            try
            {
                await this._app.Remove(dto);
                return result.ReturnCustomResponse(this._app);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - Comentario", dto);
            }
        }
    }
}
