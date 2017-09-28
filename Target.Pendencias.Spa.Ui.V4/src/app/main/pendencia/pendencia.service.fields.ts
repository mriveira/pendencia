import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class PendenciaServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            projetoId : new FormControl(),
            resumo : new FormControl(),
            descricao : new FormControl(),
            requisitadoPor : new FormControl(),
            tags : new FormControl(),
            prazo : new FormControl(),
            dataConclusao : new FormControl(),
            pendenciaId : new FormControl(),
            tempoEstimado : new FormControl(),
            pontosEstimados : new FormControl(),
            usuarioId : new FormControl(),
            pendenciaTipoId : new FormControl(),
            fluxoTrabalhoStatusId : new FormControl(),
            pendenciaPrioridadeId : new FormControl(),

        });
		return new FormGroup(formControls);
	}



	getInfosFields(moreInfosFields? : any) {
		var defaultInfosFields = Object.assign(moreInfosFields || {}, {
			projetoId: { label: 'projetoId', type: 'int', isKey: false, list:false   },
			resumo: { label: 'resumo', type: 'string', isKey: false, list:true   },
			descricao: { label: 'descricao', type: 'string', isKey: false, list:false   },
			requisitadoPor: { label: 'requisitadoPor', type: 'string', isKey: false, list:true   },
			tags: { label: 'tags', type: 'string', isKey: false, list:true   },
			prazo: { label: 'prazo', type: 'DateTime?', isKey: false, list:true   },
			dataConclusao: { label: 'dataConclusao', type: 'DateTime?', isKey: false, list:true   },
			pendenciaId: { label: 'pendenciaId', type: 'int', isKey: true, list:false   },
			tempoEstimado: { label: 'tempoEstimado', type: 'int?', isKey: false, list:true   },
			pontosEstimados: { label: 'pontosEstimados', type: 'dataitem', isKey: false, list:true  , aux : [{ id : 0, name: '0 Pontos' },{ id : 1, name: '1 Ponto' },{ id : 2, name: '2 Pontos' },{ id : 3, name: '3 Pontos' },{ id : 5, name: '5 Pontos' },{ id : 8, name: '8 Pontos' },{ id : 13, name: '13 Pontos' },{ id : 20, name: '20 Pontos' },{ id : 40, name: '40 Pontos' },{ id : 100, name: '100 Pontos' }] },
			usuarioId: { label: 'usuarioId', type: 'int', isKey: false, list:false   },
			pendenciaTipoId: { label: 'pendenciaTipoId', type: 'int', isKey: false, list:false   },
			fluxoTrabalhoStatusId: { label: 'fluxoTrabalhoStatusId', type: 'int', isKey: false, list:false   },
			pendenciaPrioridadeId: { label: 'pendenciaPrioridadeId', type: 'int', isKey: false, list:false   },

        });
		return defaultInfosFields;
    }

}
