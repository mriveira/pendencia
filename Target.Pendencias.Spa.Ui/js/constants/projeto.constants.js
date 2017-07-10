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
                descricao: 'descricao',
                visao : 'Visão',
                clienteId : 'clienteId',
                usuarioId: 'usuarioId',
                chaveUnica: 'ChaveUnica',
                inicio: 'inicio',
                fim: 'Fim',

			
			},
			Attributes : {
                projetoId : '',
                nome : '',
                descricao : '',
                clienteId : '',
                usuarioId : '',
				
			}
        });
})();

