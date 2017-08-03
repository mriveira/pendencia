import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';

@Injectable()
export class PendenciaTipoService extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		super();

		this._form = new FormGroup({
            pendenciaTipoId : new FormControl(),
            nome : new FormControl(),

        });

    }

    initVM(): ViewModel {

        return new ViewModel({
            mostrarFiltros: false,
            actionTitle: " PendenciaTipo",
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
				pendenciaTipoId: { label: 'pendenciaTipoId', type: 'int', isKey: true, list:false },
				nome: { label: 'nome', type: 'string', isKey: false, list:true },

        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('PendenciaTipo').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.pendenciaTipoId != undefined) {
            return this.api.setResource('PendenciaTipo').put(model);
        }

        return this.api.setResource('PendenciaTipo').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('PendenciaTipo').delete(model);

    }

}
