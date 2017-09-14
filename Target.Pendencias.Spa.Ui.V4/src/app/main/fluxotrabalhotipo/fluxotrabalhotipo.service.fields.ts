import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class FluxoTrabalhoTipoServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            nome : new FormControl(),
            descricao : new FormControl(),
            fluxoTrabalhoTipoId : new FormControl(),

        });
		return new FormGroup(formControls);
	}

	getInfosFields() {
		return {
			nome: { label: 'nome', type: 'string', isKey: false, list:true   },
			descricao: { label: 'descricao', type: 'string', isKey: false, list:false   },
			fluxoTrabalhoTipoId: { label: 'fluxoTrabalhoTipoId', type: 'int', isKey: true, list:false   },

        }
    }



}
