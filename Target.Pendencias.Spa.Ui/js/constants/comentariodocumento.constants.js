(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("ComentarioDocumentoConstants", {

			ActionTitle : "ComentarioDocumento",
			ActionDescription : "",

			Labels : {
                documentoId : 'documentoId',
                comentarioId : 'comentarioId',
			
			},
			Attributes : {
                documentoId : '',
                comentarioId : '',
				
			}
        });
})();

