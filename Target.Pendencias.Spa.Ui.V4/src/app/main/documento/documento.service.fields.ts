import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class DocumentoServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            arquivo : new FormControl(),
            ext : new FormControl(),
            documentoId : new FormControl(),

        });
		return new FormGroup(formControls);
	}



	getInfosFields(moreInfosFields? : any) {
		var defaultInfosFields = Object.assign(moreInfosFields || {}, {
			arquivo: { label: 'arquivo', type: 'string', isKey: false, list:true   },
			ext: { label: 'ext', type: 'string', isKey: false, list:true   },
			documentoId: { label: 'documentoId', type: 'int', isKey: true, list:false   },

        });
		return defaultInfosFields;
    }

}
