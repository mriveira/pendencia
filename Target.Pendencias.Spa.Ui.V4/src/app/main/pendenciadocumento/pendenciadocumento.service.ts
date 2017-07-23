import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class PendenciaDocumentoService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            pendenciaId : new FormControl(),
            documentoId : new FormControl(),
        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "PendenciaDocumento",
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
           				pendenciaId: { label: 'pendenciaId', type: 'int', isKey: true },
				documentoId: { label: 'documentoId', type: 'int', isKey: true },
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

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
