(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("PendenciaDocumentoConstants", {

			ActionTitle : "PendenciaDocumento",
			ActionDescription : "",

			Labels : {
                pendenciaId : 'pendenciaId',
                documentoId : 'documentoId',
			
			},
			Attributes : {
                pendenciaId : '',
                documentoId : '',
				
			}
        });
})();

