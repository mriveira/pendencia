(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("FluxoTrabalhoStatusConstants", {

			ActionTitle : "FluxoTrabalhoStatus",
			ActionDescription : "",

			Labels : {
                fluxoTrabalhoStatusId : 'fluxoTrabalhoStatusId',
                nome : 'nome',
                fluxoTrabalhoTipoId : 'fluxoTrabalhoTipoId',
                corFundo : 'corFundo',
                corFonte : 'corFonte',
                ordem : 'ordem',
			
			},
			Attributes : {
                fluxoTrabalhoStatusId : '',
                nome : '',
                fluxoTrabalhoTipoId : '',
                corFundo : '',
                corFonte : '',
                ordem : '',
				
			}
        });
})();

