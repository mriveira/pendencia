import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class AcompanhadoresService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "Acompanhadores",
            actionDescription: "",
			downloadUri : GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: [],
            summary: {},
            model: {},
            labels: {
				pendenciaId : 'pendenciaId',
				usuarioId : 'usuarioId',

            },
            required: {
				pendenciaId : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Acompanhadores').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.PendenciaId != undefined) {
            return this.api.setResource('Acompanhadores').put(model);
        }

        return this.api.setResource('Acompanhadores').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('Acompanhadores').delete(model);

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
