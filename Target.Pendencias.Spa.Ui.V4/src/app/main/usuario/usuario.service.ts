import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class UsuarioService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "Usuario",
            actionDescription: "",
			downloadUri : GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: [],
            summary: {},
            model: {},
            labels: {
				usuarioId : 'usuarioId',
				nome : 'nome',
				foto : 'foto',
				email : 'email',
				senha : 'senha',
				usuarioTipoId : 'usuarioTipoId',
				ativo : 'ativo',
				usuarioDonoId : 'usuarioDonoId',

            },
            required: {
				nome : true,
				email : true,
				senha : true,
				usuarioTipoId : true,
				ativo : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Usuario').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.UsuarioId != undefined) {
            return this.api.setResource('Usuario').put(model);
        }

        return this.api.setResource('Usuario').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('Usuario').delete(model);

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
