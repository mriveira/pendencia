import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';

@Injectable()
export class PendenciaDocumentoService extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		super();

		this._form = new FormGroup({
            pendenciaId : new FormControl(),
            documentoId : new FormControl(),

        });

    }

    initVM(): ViewModel {

        return new ViewModel({
            mostrarFiltros: false,
            actionTitle: "Cliente",
            actionDescription: "",
            downloadUri: GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: {},
            summary: {},
            model: {},
            infos: this.getInfos(),
            grid: super.getInfoGrid(this.getInfos()),
            form: this._form
        });
    }

	getInfos() {
		return {
				pendenciaId: { label: 'pendenciaId', type: 'int', isKey: true, list:true },
				documentoId: { label: 'documentoId', type: 'int', isKey: true, list:true },

        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('PendenciaDocumento').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.pendenciaId != undefined &&  model.documentoId != undefined) {
            return this.api.setResource('PendenciaDocumento').put(model);
        }

        return this.api.setResource('PendenciaDocumento').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('PendenciaDocumento').delete(model);

    }

}
