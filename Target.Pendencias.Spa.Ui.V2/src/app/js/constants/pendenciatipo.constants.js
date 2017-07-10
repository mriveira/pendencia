(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("PendenciaTipoConstants", {

			ActionTitle : "PendenciaTipo",
			ActionDescription : "",

			Labels : {
                pendenciaTipoId : 'pendenciaTipoId',
                nome : 'nome',
			
			},
			Attributes : {
                pendenciaTipoId : '',
                nome : '',
				
			}
        });
})();

