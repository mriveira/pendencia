(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("AcompanhadoresConstants", {

			ActionTitle : "Acompanhadores",
			ActionDescription : "",

			Labels : {
                pendenciaId : 'pendenciaId',
                usuarioId : 'usuarioId',
			
			},
			Attributes : {
                pendenciaId : '',
                usuarioId : '',
				
			}
        });
})();

