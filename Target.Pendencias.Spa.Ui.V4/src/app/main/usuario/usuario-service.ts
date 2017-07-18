import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class UsuarioService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "Usuario",
            actionDescription: "",
            messageConfirmation: "Deseja relamente executar essa operação?",
            filterResult: [],
            modelFilter: [],
            createForm: {},
            summary: {},
            model: {},
            labels: {
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

        if (model.fluxoTrabalhoStatusId != undefined) {
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

}
