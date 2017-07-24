import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class PendeciaPrioridadeService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            pendeciaPrioridadeId : new FormControl(),
            nome : new FormControl(),
        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "PendeciaPrioridade",
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
				pendeciaPrioridadeId: { label: 'pendeciaPrioridadeId', type: 'int', isKey: true, list:true },
				nome: { label: 'nome', type: 'string', isKey: false, list:true },
        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('PendeciaPrioridade').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.pendeciaPrioridadeId != undefined) {
            return this.api.setResource('PendeciaPrioridade').put(model);
        }

        return this.api.setResource('PendeciaPrioridade').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('PendeciaPrioridade').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
