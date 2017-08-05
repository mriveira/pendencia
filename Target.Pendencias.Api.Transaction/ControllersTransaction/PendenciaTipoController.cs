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
    [Route("api/transaction/PendenciaTipo")]
    public class PendenciaTipoController : Controller
    {

        private readonly PendenciaTipoIRepository _rep;
		private readonly ILogger _logger;


        public PendenciaTipoController(PendenciaTipoIRepository rep, ILoggerFactory logger)
        {
            this._rep = rep;
			this._logger = logger.CreateLogger<PendenciaTipoController>();
			
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]PendenciaTipoFilter filters)
        {
			var result = new HttpResult<dynamic>(this._logger);
            try
            {
                var searchResult = await this._rep.GetDataListCustom(filters);
                return result.ReturnCustomResponse(searchResult, filters);


            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendenciaTipo", filters);
            }

        }

		[HttpGet("{id}")]
		public async Task<IActionResult> Get(int id, [FromQuery]PendenciaTipoFilter filters)
		{
			var result = new HttpResult<dynamic>(this._logger);
            try
            {
				filters.PendenciaTipoId = id;
                var returnModel = await this._rep.GetDataCustom(filters);
                return result.ReturnCustomResponse(returnModel, filters);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendenciaTipo", id);
            }

		}

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]PendenciaTipoDtoSpecialized dto)
        {
           var result = new HttpResult<dynamic>(this._logger);
            try
            {
                var returnModel = await this._rep.Save(dto);
                return result.ReturnCustomResponse(returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendenciaTipo", dto);
            }
        }



        [HttpPut]
        public async Task<IActionResult> Put([FromBody]PendenciaTipoDtoSpecialized dto)
        {
            var result = new HttpResult<dynamic>(this._logger);
            try
            {
                var returnModel = await this._rep.SavePartial(dto);
                return result.ReturnCustomResponse(returnModel);

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendenciaTipo", dto);
            }
        }


        [HttpDelete]
        public async Task<IActionResult> Delete(PendenciaTipoDto dto)
        {
            var result = new HttpResult<dynamic>(this._logger);
            try
            {
                await this._rep.Remove(dto);
                return result.ReturnCustomResponse(dto);
            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Target.Pendencias - PendenciaTipo", dto);
            }
        }
    }
}
