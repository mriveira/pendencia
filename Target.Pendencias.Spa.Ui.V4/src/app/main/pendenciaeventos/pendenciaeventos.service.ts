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
            pendenciaEventosId : new FormControl(),
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
				pendenciaEventosId: { label: 'pendenciaEventosId', type: 'int', isKey: true, list:true },
				pendenciaId: { label: 'pendenciaId', type: 'int', isKey: false, list:true },
				descricao: { label: 'descricao', type: 'string', isKey: false, list:true },
				data: { label: 'data', type: 'DateTime?', isKey: false, list:true },
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
