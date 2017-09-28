import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class ProjetoServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            nome : new FormControl(),
            descricao : new FormControl(),
            visao : new FormControl(),
            chaveUnica : new FormControl(),
            inicio : new FormControl(),
            fim : new FormControl(),
            projetoId : new FormControl(),
            clienteId : new FormControl(),
            usuarioId : new FormControl(),

        });
		return new FormGroup(formControls);
	}



	getInfosFields(moreInfosFields? : any) {
		var defaultInfosFields = Object.assign(moreInfosFields || {}, {
			nome: { label: 'nome', type: 'string', isKey: false, list:true   },
			descricao: { label: 'descricao', type: 'string', isKey: false, list:false   },
			visao: { label: 'visao', type: 'string', isKey: false, list:false   },
			chaveUnica: { label: 'chaveUnica', type: 'string', isKey: false, list:true   },
			inicio: { label: 'inicio', type: 'DateTime?', isKey: false, list:true   },
			fim: { label: 'fim', type: 'DateTime?', isKey: false, list:true   },
			projetoId: { label: 'projetoId', type: 'int', isKey: true, list:false   },
			clienteId: { label: 'clienteId', type: 'int', isKey: false, list:false   },
			usuarioId: { label: 'usuarioId', type: 'int', isKey: false, list:false   },

        });
		return defaultInfosFields;
    }

}
