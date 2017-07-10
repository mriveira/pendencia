(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("PendenciaConstants", {

			ActionTitle : "Pendencia",
			ActionDescription : "",

			Labels : {
                pendenciaId : 'pendenciaId',
                resumo : 'resumo',
                descricao : 'descricao',
                requisitadoPor : 'requisitadoPor',
                tempoEstimado : 'tempoEstimado',
                pontosEstimados : 'pontosEstimados',
                prazo : 'prazo',
                projetoId : 'projetoId',
                usuarioId : 'usuarioId',
                pendenciaTipoId : 'pendenciaTipoId',
                fluxoTrabalhoStatusId : 'fluxoTrabalhoStatusId',
                pendenciaPrioridadeId: 'pendenciaPrioridadeId',
                tags: 'Tags',
                dataConclusao: 'dataConclusao',
                userCreateId : 'userCreateId',
                userCreateDate : 'userCreateDate',
                userAlterId : 'userAlterId',
                userAlterDate : 'userAlterDate',
			
			},
			Attributes : {
                pendenciaId : '',
                resumo : '',
                descricao : '',
                requisitadoPor : '',
                tempoEstimado: 'ui-number-mask="0"',
                pontosEstimados : '',
                prazo : '',
                projetoId : '',
                usuarioId : '',
                pendenciaTipoId : '',
                fluxoTrabalhoStatusId : '',
                pendenciaPrioridadeId : '',
                userCreateId : '',
                userCreateDate : '',
                userAlterId : '',
                userAlterDate : '',
				
			}
        });
})();

