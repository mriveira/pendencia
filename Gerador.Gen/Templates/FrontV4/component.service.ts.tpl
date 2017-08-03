import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';

@Injectable()
export class <#className#>Service extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		super();

		this._form = new FormGroup({
<#riquered#>
        });

    }

    initVM(): ViewModel {

        return new ViewModel({
            mostrarFiltros: false,
            actionTitle: " <#className#>",
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

	upload(file: File)
    {
        return this.api.setResource('<#className#>').upload(file);
    }

}
