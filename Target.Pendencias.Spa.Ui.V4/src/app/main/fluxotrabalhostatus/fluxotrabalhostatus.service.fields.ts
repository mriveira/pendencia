import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class FluxoTrabalhoStatusServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            nome : new FormControl(),
            corFundo : new FormControl(),
            corFonte : new FormControl(),
            fluxoTrabalhoStatusId : new FormControl(),
            fluxoTrabalhoTipoId : new FormControl(),
            ordem : new FormControl(),

        });
		return new FormGroup(formControls);
	}

	getInfosFields() {
		return {
			nome: { label: 'nome', type: 'string', isKey: false, list:true   },
			corFundo: { label: 'corFundo', type: 'string', isKey: false, list:true   },
			corFonte: { label: 'corFonte', type: 'string', isKey: false, list:true   },
			fluxoTrabalhoStatusId: { label: 'fluxoTrabalhoStatusId', type: 'int', isKey: true, list:false   },
			fluxoTrabalhoTipoId: { label: 'fluxoTrabalhoTipoId', type: 'int', isKey: false, list:false   },
			ordem: { label: 'ordem', type: 'int?', isKey: false, list:true   },

        }
    }



}
