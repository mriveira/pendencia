(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("ComentarioConstants", {

			ActionTitle : "Comentario",
			ActionDescription : "",

			Labels : {
                comentarioId : 'comentarioId',
                descricao : 'descricao',
                usuarioId : 'usuarioId',
                pendenciaId : 'pendenciaId',
			
			},
			Attributes : {
                comentarioId : '',
                descricao : '',
                usuarioId : '',
                pendenciaId : '',
				
			}
        });
})();

