import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class <#className#>Service {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "<#className#>",
            actionDescription: "",
            messageConfirmation: "Deseja relamente executar essa operação?",
            filterResult: [],
            modelFilter: [],
            createForm: {},
            summary: {},
            model: {},
            labels: {
<#labels#>
            },
            required: {
<#riquered#>
			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('<#className#>').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.<#KeyName#> != undefined) {
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
