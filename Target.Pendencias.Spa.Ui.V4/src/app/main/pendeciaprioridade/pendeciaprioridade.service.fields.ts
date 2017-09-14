import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class PendeciaPrioridadeServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            nome : new FormControl(),
            pendeciaPrioridadeId : new FormControl(),

        });
		return new FormGroup(formControls);
	}

	getInfosFields() {
		return {
			nome: { label: 'nome', type: 'string', isKey: false, list:true   },
			pendeciaPrioridadeId: { label: 'pendeciaPrioridadeId', type: 'int', isKey: true, list:false   },

        }
    }



}
