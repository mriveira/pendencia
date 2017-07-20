import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class PendenciaTipoService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            nome : new FormControl(),

        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "PendenciaTipo",
            actionDescription: "",
			downloadUri : GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: [],
            summary: {},
            model: {},
            labels: {
				pendenciaTipoId : 'pendenciaTipoId',
				nome : 'nome',

            },
			form: this._form
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('PendenciaTipo').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.PendenciaTipoId != undefined) {
            return this.api.setResource('PendenciaTipo').put(model);
        }

        return this.api.setResource('PendenciaTipo').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('PendenciaTipo').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
