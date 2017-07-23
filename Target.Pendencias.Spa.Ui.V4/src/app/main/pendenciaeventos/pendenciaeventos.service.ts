import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class PendenciaEventosService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            pendenciaId : new FormControl(),
            descricao : new FormControl(),
            data : new FormControl(),
        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "PendenciaEventos",
            actionDescription: "",
			downloadUri : GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: {},
            summary: {},
            model: {},
            infos: this.getInfos(),
            grid: this.infosToArray(),
			form: this._form
        };

    }

	infosToArray() {

        var list = [];
        for (let key in this.getInfos()) {
            list.push(this.getInfos()[key])
        }
        return list;
    }

	getInfos() {
        return {
           				pendenciaId: { label: 'pendenciaId', type: 'int', isKey: false },
				descricao: { label: 'descricao', type: 'string', isKey: false },
				data: { label: 'data', type: 'DateTime?', isKey: false },
        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('PendenciaEventos').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.pendenciaEventosId != undefined) {
            return this.api.setResource('PendenciaEventos').put(model);
        }

        return this.api.setResource('PendenciaEventos').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('PendenciaEventos').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
