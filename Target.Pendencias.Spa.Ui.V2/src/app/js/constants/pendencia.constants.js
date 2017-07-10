(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("PendenciaConstants", {

			ActionTitle : "Pendencia",
			ActionDescription : "",

			Labels : {
                projetoId : 'projetoId',
                pendenciaId : 'pendenciaId',
                resumo : 'resumo',
                descricao : 'descricao',
                requisitadoPor : 'requisitadoPor',
                tempoEstimado : 'tempoEstimado',
                pontosEstimados : 'pontosEstimados',
                prazo : 'prazo',
                usuarioId : 'usuarioId',
                pendenciaTipoId : 'pendenciaTipoId',
                fluxoTrabalhoStatusId : 'fluxoTrabalhoStatusId',
                pendenciaPrioridadeId : 'pendenciaPrioridadeId',
                tags : 'tags',
                dataConclusao : 'dataConclusao',
                userCreateId : 'userCreateId',
                userCreateDate : 'userCreateDate',
                userAlterId : 'userAlterId',
                userAlterDate : 'userAlterDate',
			
			},
			Attributes : {
                projetoId : '',
                pendenciaId : '',
                resumo : '',
                descricao : '',
                requisitadoPor : '',
                tempoEstimado : '',
                pontosEstimados : '',
                prazo : '',
                usuarioId : '',
                pendenciaTipoId : '',
                fluxoTrabalhoStatusId : '',
                pendenciaPrioridadeId : '',
                tags : '',
                dataConclusao : '',
                userCreateId : '',
                userCreateDate : '',
                userAlterId : '',
                userAlterDate : '',
				
			}
        });
})();

