(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("PendeciaPrioridadeConstants", {

			ActionTitle : "PendeciaPrioridade",
			ActionDescription : "",

			Labels : {
                pendeciaPrioridadeId : 'pendeciaPrioridadeId',
                nome : 'nome',
			
			},
			Attributes : {
                pendeciaPrioridadeId : '',
                nome : '',
				
			}
        });
})();

