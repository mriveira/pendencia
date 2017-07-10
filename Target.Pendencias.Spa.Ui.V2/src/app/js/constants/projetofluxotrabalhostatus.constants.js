(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("ProjetoFluxoTrabalhoStatusConstants", {

			ActionTitle : "ProjetoFluxoTrabalhoStatus",
			ActionDescription : "",

			Labels : {
                projetoId : 'projetoId',
                fluxoTrabalhoStatusId : 'fluxoTrabalhoStatusId',
			
			},
			Attributes : {
                projetoId : '',
                fluxoTrabalhoStatusId : '',
				
			}
        });
})();

