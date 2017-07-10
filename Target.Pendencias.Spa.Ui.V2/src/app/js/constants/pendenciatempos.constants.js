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
                usuarioId : 'usuarioId',
                inicio : 'inicio',
                fim : 'fim',
                nota : 'nota',
                userCreateId : 'userCreateId',
                userCreateDate : 'userCreateDate',
                userAlterId : 'userAlterId',
                userAlterDate : 'userAlterDate',
			
			},
			Attributes : {
                pendenciaTemposId : '',
                pendenciaId : '',
                usuarioId : '',
                inicio : '',
                fim : '',
                nota : '',
                userCreateId : '',
                userCreateDate : '',
                userAlterId : '',
                userAlterDate : '',
				
			}
        });
})();

