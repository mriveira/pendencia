using Target.Pendencias.Domain.Filter.Transaction;
using Target.Pendencias.Dto.Transaction;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Data;
using System.Linq;
using System.Data.SqlClient;
using Common.Domain.Base;
using Microsoft.Extensions.Options;
using Dapper;

namespace Target.Pendencias.Data.Repository.Transaction
{
    public class PendenciaTipoRepository : PendenciaTipoIRepository
    {

        private IDbConnection _connection;

        public PendenciaTipoRepository(IOptions<Connectionstring> configSettingsBase)
        {
            _connection = new SqlConnection(configSettingsBase.Value.Default);
        }

		public async Task<dynamic> GetDataCustom(PendenciaTipoFilter parameters)
        {
            var result = await _connection.QueryAsync("PendenciaTipo_GetDataCustom", 
			new
            {
				PendenciaTipoId = parameters.PendenciaTipoId,
				Nome = parameters.Nome,

            },commandType: CommandType.StoredProcedure);
            return result.SingleOrDefault();
        }

        public async Task<IEnumerable<dynamic>> GetDataItem(PendenciaTipoFilter parameters)
        {
            var result = await _connection.QueryAsync("PendenciaTipo_GetDataItem", 
			new
            {
				PendenciaTipoId = parameters.PendenciaTipoId,
				Nome = parameters.Nome,

            },commandType: CommandType.StoredProcedure);
            return result;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(PendenciaTipoFilter parameters)
        {
            var result = await _connection.QueryAsync("PendenciaTipo_GetDataListCustom", 
			new
            {
				PendenciaTipoId = parameters.PendenciaTipoId,
				Nome = parameters.Nome,

            }, commandType: CommandType.StoredProcedure);
            return result;
        }

        public async Task<bool> Remove(PendenciaTipoDto parameters)
        {
            var result = await _connection.ExecuteScalarAsync("PendenciaTipo_Remove",
			new
            {
				PendenciaTipoId = parameters.PendenciaTipoId,
				Nome = parameters.Nome,

            },commandType: CommandType.StoredProcedure);
            return true;
        }

        public async Task<dynamic> Save(PendenciaTipoDtoSpecialized parameters)
        {
            var result = await _connection.ExecuteScalarAsync("PendenciaTipo_Save", 
			new
            {
				PendenciaTipoId = parameters.PendenciaTipoId,
				Nome = parameters.Nome,

            }, commandType: CommandType.StoredProcedure);
            return true;
        }

		public async Task<dynamic> SavePartial(PendenciaTipoDtoSpecialized parameters)
        {
            var result = await _connection.ExecuteScalarAsync("PendenciaTipo_SavePartial", 
			new
            {
				PendenciaTipoId = parameters.PendenciaTipoId,
				Nome = parameters.Nome,

            }, commandType: CommandType.StoredProcedure);
            return true;
        }
       
    }
}
