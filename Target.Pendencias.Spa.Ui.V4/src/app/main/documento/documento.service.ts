import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class DocumentoService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            documentoId : new FormControl(),
            arquivo : new FormControl(),
            ext : new FormControl(),
        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "Documento",
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

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
