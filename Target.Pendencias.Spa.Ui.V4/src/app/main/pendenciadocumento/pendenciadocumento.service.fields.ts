import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class PendenciaDocumentoServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            pendenciaId : new FormControl(),
            documentoId : new FormControl(),

        });
		return new FormGroup(formControls);
	}

	getInfosFields() {
		return {
			pendenciaId: { label: 'pendenciaId', type: 'int', isKey: true, list:false   },
			documentoId: { label: 'documentoId', type: 'int', isKey: true, list:false   },

        }
    }



}
