(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("ProjetoConstants", {

			ActionTitle : "Projeto",
			ActionDescription : "",

			Labels : {
                projetoId : 'projetoId',
                nome : 'nome',
                descricao : 'descricao',
                visao : 'visao',
                clienteId : 'clienteId',
                usuarioId : 'usuarioId',
                chaveUnica : 'chaveUnica',
                inicio : 'inicio',
                fim : 'fim',
                userCreateId : 'userCreateId',
                userCreateDate : 'userCreateDate',
                userAlterId : 'userAlterId',
                userAlterDate : 'userAlterDate',
			
			},
			Attributes : {
                projetoId : '',
                nome : '',
                descricao : '',
                visao : '',
                clienteId : '',
                usuarioId : '',
                chaveUnica : '',
                inicio : '',
                fim : '',
                userCreateId : '',
                userCreateDate : '',
                userAlterId : '',
                userAlterDate : '',
				
			}
        });
})();

