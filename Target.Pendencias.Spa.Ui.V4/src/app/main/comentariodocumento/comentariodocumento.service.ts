import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class ComentarioDocumentoService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            documentoId : new FormControl(),
            comentarioId : new FormControl(),

        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "ComentarioDocumento",
            actionDescription: "",
			downloadUri : GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: [],
            summary: {},
            model: {},
            labels: {
				documentoId : 'documentoId',
				comentarioId : 'comentarioId',

            },
			form: this._form
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('ComentarioDocumento').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.DocumentoId != undefined) {
            return this.api.setResource('ComentarioDocumento').put(model);
        }

        return this.api.setResource('ComentarioDocumento').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('ComentarioDocumento').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
