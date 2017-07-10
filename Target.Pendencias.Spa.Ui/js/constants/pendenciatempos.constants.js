(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("PendenciaTemposConstants", {

			ActionTitle : "PendenciaTempos",
			ActionDescription : "",

			Labels : {
                pendenciaTemposId : 'pendenciaTemposId',
                pendenciaId : 'pendenciaId',
                inicio : 'inicio',
                fim : 'fim',
                nota : 'nota',
			
			},
			Attributes : {
                pendenciaTemposId : '',
                pendenciaId : '',
                inicio : '',
                fim : '',
                nota : '',
				
			}
        });
})();

