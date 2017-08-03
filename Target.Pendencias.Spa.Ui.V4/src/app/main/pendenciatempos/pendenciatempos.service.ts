import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';

@Injectable()
export class PendenciaTemposService extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		super();

		this._form = new FormGroup({
            pendenciaTemposId : new FormControl(),
            pendenciaId : new FormControl(),
            usuarioId : new FormControl(),
            inicio : new FormControl(),
            fim : new FormControl(),
            nota : new FormControl(),

        });

    }

    initVM(): ViewModel {

        return new ViewModel({
            mostrarFiltros: false,
            actionTitle: " PendenciaTempos",
            actionDescription: "",
            downloadUri: GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: {},
            summary: {},
            model: {},
			details: {},
            infos: this.getInfos(),
            grid: super.getInfoGrid(this.getInfos()),
            form: this._form
        });
    }

	getInfos() {
		return {
				pendenciaTemposId: { label: 'pendenciaTemposId', type: 'int', isKey: true, list:false },
				pendenciaId: { label: 'pendenciaId', type: 'int', isKey: false, list:false },
				usuarioId: { label: 'usuarioId', type: 'int', isKey: false, list:false },
				inicio: { label: 'inicio', type: 'DateTime', isKey: false, list:true },
				fim: { label: 'fim', type: 'DateTime?', isKey: false, list:true },
				nota: { label: 'nota', type: 'string', isKey: false, list:false },

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

}
