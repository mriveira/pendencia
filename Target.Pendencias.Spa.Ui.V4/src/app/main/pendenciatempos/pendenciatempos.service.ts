import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class PendenciaTemposService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            pendenciaId : new FormControl(),
            usuarioId : new FormControl(),
            inicio : new FormControl(),
            fim : new FormControl(),
            nota : new FormControl(),

        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "PendenciaTempos",
            actionDescription: "",
			downloadUri : GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: [],
            summary: {},
            model: {},
            labels: {
				pendenciaTemposId : 'pendenciaTemposId',
				pendenciaId : 'pendenciaId',
				usuarioId : 'usuarioId',
				inicio : 'inicio',
				fim : 'fim',
				nota : 'nota',

            },
			form: this._form
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('PendenciaTempos').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.PendenciaTemposId != undefined) {
            return this.api.setResource('PendenciaTempos').put(model);
        }

        return this.api.setResource('PendenciaTempos').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('PendenciaTempos').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
