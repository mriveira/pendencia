using Common.Gen;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cna.Erp.Gen
{
    public class HelperSysObjects : HelperSysObjectsDDDWithTransaction
    {

        public HelperSysObjects(IEnumerable<Context> contexts) : base(contexts) { }

    }
}
