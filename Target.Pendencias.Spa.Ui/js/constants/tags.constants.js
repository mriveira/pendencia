(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("TagsConstants", {

			ActionTitle : "Tags",
			ActionDescription : "",

			Labels : {
                tagsId : 'tagsId',
                nome : 'nome',
                projetoId : 'projetoId',
                pendenciaId : 'pendenciaId',
			
			},
			Attributes : {
                tagsId : '',
                nome : '',
                projetoId : '',
                pendenciaId : '',
				
			}
        });
})();

