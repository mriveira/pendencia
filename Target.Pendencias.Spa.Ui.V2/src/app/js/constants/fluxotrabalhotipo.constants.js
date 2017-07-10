(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("FluxoTrabalhoTipoConstants", {

			ActionTitle : "FluxoTrabalhoTipo",
			ActionDescription : "",

			Labels : {
                fluxoTrabalhoTipoId : 'fluxoTrabalhoTipoId',
                nome : 'nome',
			
			},
			Attributes : {
                fluxoTrabalhoTipoId : '',
                nome : '',
				
			}
        });
})();

