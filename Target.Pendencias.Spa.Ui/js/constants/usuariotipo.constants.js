(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("UsuarioTipoConstants", {

			ActionTitle : "UsuarioTipo",
			ActionDescription : "",

			Labels : {
                usuarioTipoId : 'usuarioTipoId',
                nome : 'nome',
			
			},
			Attributes : {
                usuarioTipoId : '',
                nome : '',
				
			}
        });
})();

