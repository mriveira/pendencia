using System;
using Common.API;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Target.Pendencias.Domain.Filter.Transaction;
using Target.Pendencias.Dto.Transaction;
using Target.Pendencias.Data.Repository.Transaction;

namespace Target.Pendencias.Api.ControllersTransactions
{
	[Authorize]
    [Route("api/transaction/UsuarioTipo")]
    public class UsuarioTipoController : Controller
    {

        private readonly UsuarioTipoIRepository _rep;
		private readonly ILogger _logger;


        public UsuarioTipoController(UsuarioTipoIRepository rep, ILoggerFactory logger)
        {
            this._rep = rep;
			this._logger = logger.CreateLogger<UsuarioTipoController>();
			
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]UsuarioTipoFilter filters)
        {
			var result = new HttpResult<dynamic>(this._logger);
            try
            {
                var searchResult = await this._rep.GetDataListCustom(filters);
                return result.ReturnCustomResponse(searchResult, filters);


            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - UsuarioTipo", filters);
            }

        }

		[HttpGet("{id}")]
		public async Task<IActionResult> Get(int id, [FromQuery]UsuarioTipoFilter filters)
		{
			var result = new HttpResult<dynamic>(this._logger);
            try
            {
				filters.UsuarioTipoId = id;
                var returnModel = await this._rep.GetDataCustom(filters);
                return result.ReturnCustomResponse(returnModel, filters);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - UsuarioTipo", id);
            }

		}

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]UsuarioTipoDtoSpecialized dto)
        {
           var result = new HttpResult<dynamic>(this._logger);
            try
            {
                var returnModel = await this._rep.Save(dto);
                return result.ReturnCustomResponse(returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - UsuarioTipo", dto);
            }
        }



        [HttpPut]
        public async Task<IActionResult> Put([FromBody]UsuarioTipoDtoSpecialized dto)
        {
            var result = new HttpResult<dynamic>(this._logger);
            try
            {
                var returnModel = await this._rep.SavePartial(dto);
                return result.ReturnCustomResponse(returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - UsuarioTipo", dto);
            }
        }


        [HttpDelete]
        public async Task<IActionResult> Delete(UsuarioTipoDto dto)
        {
            var result = new HttpResult<dynamic>(this._logger);
            try
            {
                await this._rep.Remove(dto);
                return result.ReturnCustomResponse(dto);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - UsuarioTipo", dto);
            }
        }
    }
}
