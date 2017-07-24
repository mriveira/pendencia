import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class ComentarioService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            comentarioId : new FormControl(),
            descricao : new FormControl(),
            data : new FormControl(),
            usuarioId : new FormControl(),
            pendenciaId : new FormControl(),
        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "Comentario",
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
				comentarioId: { label: 'comentarioId', type: 'int', isKey: true, list:true },
				descricao: { label: 'descricao', type: 'string', isKey: false, list:true },
				data: { label: 'data', type: 'DateTime', isKey: false, list:true },
				usuarioId: { label: 'usuarioId', type: 'int', isKey: false, list:true },
				pendenciaId: { label: 'pendenciaId', type: 'int', isKey: false, list:true },
        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Comentario').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.comentarioId != undefined) {
            return this.api.setResource('Comentario').put(model);
        }

        return this.api.setResource('Comentario').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('Comentario').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
