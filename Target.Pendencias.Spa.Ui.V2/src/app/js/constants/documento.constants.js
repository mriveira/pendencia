(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("DocumentoConstants", {

			ActionTitle : "Documento",
			ActionDescription : "",

			Labels : {
                documentoId : 'documentoId',
                arquivo : 'arquivo',
                ext : 'ext',
			
			},
			Attributes : {
                documentoId : '',
                arquivo : '',
                ext : '',
				
			}
        });
})();

