import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class UsuarioService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            usuarioId : new FormControl(),
            nome : new FormControl(),
            foto : new FormControl(),
            email : new FormControl(),
            senha : new FormControl(),
            usuarioTipoId : new FormControl(),
            ativo : new FormControl(),
            usuarioDonoId : new FormControl(),
        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "Usuario",
            actionDescription: "",
			downloadUri : GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: {},
            summary: {},
            model: {},
            infos: this.getInfos(),
            grid: this.getInfoGrid(),
			form: this._form
        };

    }

	getInfoGrid() {

        var list = [];
        for (let key in this.getInfos()) {
            var info = this.getInfos()[key];
            if (info.list == true)
                list.push(info);
        }
        return list;
    }

	getInfos() {
		return {
				usuarioId: { label: 'usuarioId', type: 'int', isKey: true, list:true },
				nome: { label: 'nome', type: 'string', isKey: false, list:true },
				foto: { label: 'foto', type: 'string', isKey: false, list:false },
				email: { label: 'email', type: 'string', isKey: false, list:true },
				senha: { label: 'senha', type: 'string', isKey: false, list:true },
				usuarioTipoId: { label: 'usuarioTipoId', type: 'int', isKey: false, list:true },
				ativo: { label: 'ativo', type: 'bool', isKey: false, list:true },
				usuarioDonoId: { label: 'usuarioDonoId', type: 'int?', isKey: false, list:false },
        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Usuario').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.usuarioId != undefined) {
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
