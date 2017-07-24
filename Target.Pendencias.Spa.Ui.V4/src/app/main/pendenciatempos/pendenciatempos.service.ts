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
            pendenciaTemposId : new FormControl(),
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
            modelFilter: {},
            summary: {},
            model: {},
            infos: this.getInfos(),
            grid: this.getInfoGrid(),
			form: this._form
        };

    }

	getInfoGrid() {

        var list = [];
        for (let key in this.getInfos()) {
            var info = this.getInfos()[key];
            if (info.list == true)
                list.push(info);
        }
        return list;
    }

	getInfos() {
		return {
				pendenciaTemposId: { label: 'pendenciaTemposId', type: 'int', isKey: true, list:true },
				pendenciaId: { label: 'pendenciaId', type: 'int', isKey: false, list:true },
				usuarioId: { label: 'usuarioId', type: 'int', isKey: false, list:true },
				inicio: { label: 'inicio', type: 'DateTime', isKey: false, list:true },
				fim: { label: 'fim', type: 'DateTime?', isKey: false, list:true },
				nota: { label: 'nota', type: 'string', isKey: false, list:true },
        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('PendenciaTempos').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.pendenciaTemposId != undefined) {
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
