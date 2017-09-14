import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class ComentarioDocumentoServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            documentoId : new FormControl(),
            comentarioId : new FormControl(),

        });
		return new FormGroup(formControls);
	}

	getInfosFields() {
		return {
			documentoId: { label: 'documentoId', type: 'int', isKey: true, list:false   },
			comentarioId: { label: 'comentarioId', type: 'int', isKey: true, list:false   },

        }
    }



}
