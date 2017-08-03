import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';

@Injectable()
export class AcompanhadoresService extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		super();

		this._form = new FormGroup({
            pendenciaId : new FormControl(),
            usuarioId : new FormControl(),

        });

    }

    initVM(): ViewModel {

        return new ViewModel({
            mostrarFiltros: false,
            actionTitle: " Acompanhadores",
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
				pendenciaId: { label: 'pendenciaId', type: 'int', isKey: true, list:false },
				usuarioId: { label: 'usuarioId', type: 'int', isKey: true, list:false },

        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Acompanhadores').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.pendenciaId != undefined &&  model.usuarioId != undefined) {
            return this.api.setResource('Acompanhadores').put(model);
        }

        return this.api.setResource('Acompanhadores').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('Acompanhadores').delete(model);

    }

}
