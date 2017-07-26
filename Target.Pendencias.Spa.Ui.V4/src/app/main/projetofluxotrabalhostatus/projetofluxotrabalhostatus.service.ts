import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';

@Injectable()
export class ProjetoFluxoTrabalhoStatusService extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		super();

		this._form = new FormGroup({
            projetoId : new FormControl(),
            fluxoTrabalhoStatusId : new FormControl(),

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
				projetoId: { label: 'projetoId', type: 'int', isKey: true, list:true },
				fluxoTrabalhoStatusId: { label: 'fluxoTrabalhoStatusId', type: 'int', isKey: true, list:true },

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

}
