import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';

@Injectable()
export class ComentarioService extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		super();

		this._form = new FormGroup({
            comentarioId : new FormControl(),
            descricao : new FormControl(),
            data : new FormControl(),
            usuarioId : new FormControl(),
            pendenciaId : new FormControl(),

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

}
