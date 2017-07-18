using Common.Gen;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cna.Erp.Gen
{
    public class HelperSysObjects : HelperSysObjectsDDD
    {

        public HelperSysObjects(IEnumerable<Context> contexts)
            : base(contexts)
        {

        }

        public override HelperSysObjectsBase DefineFrontTemplateClass(Context config)
        {
            //return new HelperSysObjectsAngular(config, "Templates\\FrontV2");
            //return new HelperSysObjectsAngularJs(config, "Templates\\Front");
            return new HelperSysObjectsAngular20(config, "Templates\\FrontV4");
        }

    }
}
