import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class ProjetoFluxoTrabalhoStatusService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            projetoId : new FormControl(),
            fluxoTrabalhoStatusId : new FormControl(),
        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "ProjetoFluxoTrabalhoStatus",
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
           				projetoId: { label: 'projetoId', type: 'int', isKey: true },
				fluxoTrabalhoStatusId: { label: 'fluxoTrabalhoStatusId', type: 'int', isKey: true },
        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('ProjetoFluxoTrabalhoStatus').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.projetoId != undefined &&  model.fluxoTrabalhoStatusId != undefined) {
            return this.api.setResource('ProjetoFluxoTrabalhoStatus').put(model);
        }

        return this.api.setResource('ProjetoFluxoTrabalhoStatus').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('ProjetoFluxoTrabalhoStatus').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
