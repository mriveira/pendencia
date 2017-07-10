(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("UsuarioConstants", {

			ActionTitle : "Usuario",
			ActionDescription : "",

			Labels : {
                usuarioId : 'usuarioId',
                nome : 'nome',
                email : 'email',
                senha : 'senha',
                usuarioTipoId : 'usuarioTipoId',
                ativo: 'ativo',
                foto : 'Foto'
			
			},
			Attributes : {
                usuarioId : '',
                nome : '',
                email : '',
                senha : '',
                usuarioTipoId : '',
                ativo : '',
				
			}
        });
})();

