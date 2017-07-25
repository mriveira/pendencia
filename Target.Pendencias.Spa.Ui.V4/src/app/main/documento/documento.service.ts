import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';

@Injectable()
export class DocumentoService extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		super();

		this._form = new FormGroup({
            documentoId : new FormControl(),
            arquivo : new FormControl(),
            ext : new FormControl(),
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
				documentoId: { label: 'documentoId', type: 'int', isKey: true, list:true },
				arquivo: { label: 'arquivo', type: 'string', isKey: false, list:true },
				ext: { label: 'ext', type: 'string', isKey: false, list:true },
        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Documento').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.documentoId != undefined) {
            return this.api.setResource('Documento').put(model);
        }

        return this.api.setResource('Documento').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('Documento').delete(model);

    }

}
