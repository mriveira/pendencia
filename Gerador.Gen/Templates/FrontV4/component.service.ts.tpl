import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class <#className#>Service {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
<#riquered#>
        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "<#className#>",
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
           <#infos#>
        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('<#className#>').get(filters);
    }

    save(model: any): Observable<any> {

        if (<#ExpressionKeyNames#>) {
            return this.api.setResource('<#className#>').put(model);
        }

        return this.api.setResource('<#className#>').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('<#className#>').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
