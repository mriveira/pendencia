import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class ProjetoFluxoTrabalhoStatusServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            projetoId : new FormControl(),
            fluxoTrabalhoStatusId : new FormControl(),

        });
		return new FormGroup(formControls);
	}

	getInfosFields() {
		return {
			projetoId: { label: 'projetoId', type: 'int', isKey: true, list:false   },
			fluxoTrabalhoStatusId: { label: 'fluxoTrabalhoStatusId', type: 'int', isKey: true, list:false   },

        }
    }



}
