import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class PendenciaTipoService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "PendenciaTipo",
            actionDescription: "",
			downloadUri : GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: [],
            summary: {},
            model: {},
            labels: {
				pendenciaTipoId : 'pendenciaTipoId',
				nome : 'nome',

            },
            required: {
				nome : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('PendenciaTipo').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.PendenciaTipoId != undefined) {
            return this.api.setResource('PendenciaTipo').put(model);
        }

        return this.api.setResource('PendenciaTipo').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('PendenciaTipo').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

	public isValid(vm) {

        for (let key in vm.required) {
            if (vm.required.hasOwnProperty(key)) {

                if (vm.model[key] == null || vm.model[key] == undefined || vm.model[key] == "undefined" || vm.model[key] == "") {
                    vm.isValid = false;
                    return false;
                }

            }
        }
        vm.isValid = true;
        return true;
    }

}
