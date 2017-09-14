using Common.API;
using Common.Domain.Base;

namespace Target.Pendencias.CrossCuting
{
    public class ExportExcelCustom<T> : ExportExcel<T>
    {
        public ExportExcelCustom(FilterBase filter) : base(filter)
        {



        }
    }
}
