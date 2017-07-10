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
                data : 'data',
                usuarioId : 'usuarioId',
                pendenciaId : 'pendenciaId',
                userCreateId : 'userCreateId',
                userCreateDate : 'userCreateDate',
                userAlterId : 'userAlterId',
                userAlterDate : 'userAlterDate',
			
			},
			Attributes : {
                comentarioId : '',
                descricao : '',
                data : '',
                usuarioId : '',
                pendenciaId : '',
                userCreateId : '',
                userCreateDate : '',
                userAlterId : '',
                userAlterDate : '',
				
			}
        });
})();

