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
                foto : 'foto',
                email : 'email',
                senha : 'senha',
                usuarioTipoId : 'usuarioTipoId',
                ativo : 'ativo',
                usuarioDonoId : 'usuarioDonoId',
                userCreateId : 'userCreateId',
                userCreateDate : 'userCreateDate',
                userAlterId : 'userAlterId',
                userAlterDate : 'userAlterDate',
			
			},
			Attributes : {
                usuarioId : '',
                nome : '',
                foto : '',
                email : '',
                senha : '',
                usuarioTipoId : '',
                ativo : '',
                usuarioDonoId : '',
                userCreateId : '',
                userCreateDate : '',
                userAlterId : '',
                userAlterDate : '',
				
			}
        });
})();

