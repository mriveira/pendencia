import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class FluxoTrabalhoStatusService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            nome : new FormControl(),
            fluxoTrabalhoTipoId : new FormControl(),
            corFundo : new FormControl(),
            corFonte : new FormControl(),
            ordem : new FormControl(),

        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "FluxoTrabalhoStatus",
            actionDescription: "",
			downloadUri : GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: [],
            summary: {},
            model: {},
            labels: {
				fluxoTrabalhoStatusId : 'fluxoTrabalhoStatusId',
				nome : 'nome',
				fluxoTrabalhoTipoId : 'fluxoTrabalhoTipoId',
				corFundo : 'corFundo',
				corFonte : 'corFonte',
				ordem : 'ordem',

            },
			form: this._form
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('FluxoTrabalhoStatus').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.FluxoTrabalhoStatusId != undefined) {
            return this.api.setResource('FluxoTrabalhoStatus').put(model);
        }

        return this.api.setResource('FluxoTrabalhoStatus').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('FluxoTrabalhoStatus').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
