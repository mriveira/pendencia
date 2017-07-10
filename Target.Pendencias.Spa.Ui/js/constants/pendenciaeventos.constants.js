(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("PendenciaEventosConstants", {

			ActionTitle : "PendenciaEventos",
			ActionDescription : "",

			Labels : {
                pendenciaEventosId : 'pendenciaEventosId',
                pendenciaId : 'pendenciaId',
                descricao : 'descricao',
                data : 'data',
                userCreateId : 'userCreateId',
                userCreateDate : 'userCreateDate',
                userAlterId : 'userAlterId',
                userAlterDate : 'userAlterDate',
			
			},
			Attributes : {
                pendenciaEventosId : '',
                pendenciaId : '',
                descricao : '',
                data : '',
                userCreateId : '',
                userCreateDate : '',
                userAlterId : '',
                userAlterDate : '',
				
			}
        });
})();

