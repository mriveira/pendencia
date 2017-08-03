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
    public class UsuarioTipoRepository : UsuarioTipoIRepository
    {

        private IDbConnection _connection;

        public UsuarioTipoRepository(IOptions<Connectionstring> configSettingsBase)
        {
            _connection = new SqlConnection(configSettingsBase.Value.Default);
        }

		public async Task<dynamic> GetDataCustom(UsuarioTipoFilter parameters)
        {
            var result = await _connection.QueryAsync("UsuarioTipo_GetDataCustom", 
			new
            {
				UsuarioTipoId = parameters.UsuarioTipoId,
				Nome = parameters.Nome,

            },commandType: CommandType.StoredProcedure);
            return result.SingleOrDefault();
        }

        public async Task<IEnumerable<dynamic>> GetDataItem(UsuarioTipoFilter parameters)
        {
            var result = await _connection.QueryAsync("UsuarioTipo_GetDataItem", 
			new
            {
				UsuarioTipoId = parameters.UsuarioTipoId,
				Nome = parameters.Nome,

            },commandType: CommandType.StoredProcedure);
            return result;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(UsuarioTipoFilter parameters)
        {
            var result = await _connection.QueryAsync("UsuarioTipo_GetDataListCustom", 
			new
            {
				UsuarioTipoId = parameters.UsuarioTipoId,
				Nome = parameters.Nome,

            }, commandType: CommandType.StoredProcedure);
            return result;
        }

        public async Task<bool> Remove(UsuarioTipoDto parameters)
        {
            var result = await _connection.ExecuteScalarAsync("UsuarioTipo_Remove",
			new
            {
				UsuarioTipoId = parameters.UsuarioTipoId,
				Nome = parameters.Nome,

            },commandType: CommandType.StoredProcedure);
            return true;
        }

        public async Task<dynamic> Save(UsuarioTipoDtoSpecialized parameters)
        {
            var result = await _connection.ExecuteScalarAsync("UsuarioTipo_Save", 
			new
            {
				UsuarioTipoId = parameters.UsuarioTipoId,
				Nome = parameters.Nome,

            }, commandType: CommandType.StoredProcedure);
            return true;
        }

		public async Task<dynamic> SavePartial(UsuarioTipoDtoSpecialized parameters)
        {
            var result = await _connection.ExecuteScalarAsync("UsuarioTipo_SavePartial", 
			new
            {
				UsuarioTipoId = parameters.UsuarioTipoId,
				Nome = parameters.Nome,

            }, commandType: CommandType.StoredProcedure);
            return true;
        }
       
    }
}
