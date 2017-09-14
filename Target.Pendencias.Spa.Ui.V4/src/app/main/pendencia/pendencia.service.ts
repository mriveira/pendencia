import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';
import { PendenciaServiceFields } from './pendencia.service.fields';
import { GlobalServiceCulture, Translated, TranslatedField } from '../../global.service.culture';
import { MainService } from '../main.service';

@Injectable()
export class PendenciaService extends ServiceBase {

    private _form: FormGroup;

    constructor(private api: ApiService<any>,private serviceFields: PendenciaServiceFields, private globalServiceCulture: GlobalServiceCulture, private mainService: MainService) {

		super();
        this._form = this.serviceFields.getFormFields({
            comentario: new FormControl(),
            inicio: new FormControl(),
            fim: new FormControl(),
            nota: new FormControl(),
            fluxoTrabalhoStatusId: new FormControl()
        });

    }

    initVM(): ViewModel<any> {

        return new ViewModel({
            mostrarFiltros: false,
            actionTitle: " Pendencia",
            actionDescription: "",
            downloadUri: GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: {},
            summary: {},
            model: {},
	    	details: {},
            infos: this.getInfos(),
            grid: this.getInfoGrid(this.getInfos()),
			generalInfo: this.mainService.getInfos(),
            form: this._form,
            masks: this.masksConfig()
        });
    }

	getInfos() {
		return this.serviceFields.getInfosFields();
    }

	getInfoGrid(infos : any) {
        return super.getInfoGrid(infos)
    }

    updateCulture(culture: string = null) {
        return this.getInfosTranslated(this.globalServiceCulture.defineCulture(culture));
    }

    updateCultureMain(culture: string = null) {
        return this.mainService.getInfosTranslated(this.globalServiceCulture.defineCulture(culture));
    }

    getInfosTranslated(culture: string) {
        var grupo = "Pendencia";
        return this.globalServiceCulture.getResource(grupo, culture, this.serviceFields.getInfosFields(), (culture, infosFields) => {
            return new Promise((resolve, reject) => {
                var translated = new Translated([]);
                return resolve(this.globalServiceCulture.setResource(grupo, translated.get(culture), infosFields));
            });
        });
    }

    get(filters?: any): Observable<any> {
        return this.api.setResource('Pendencia').get(filters);
    }

	getDataCustom(filters?: any): Observable<any> {
        return this.api.setResource('Pendencia').getDataCustom(filters);
    }

	getDataListCustom(filters?: any): Observable<any> {
        return this.api.setResource('Pendencia').getDataListCustom(filters);
    }

    save(model: any): Observable<any> {

        if ( model.pendenciaId != undefined) {
            return this.api.setResource('Pendencia').put(model);
        }

        return this.api.setResource('Pendencia').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('Pendencia').delete(model);

    }
    
    export(filters?: any): Observable<any>
    {
        return this.api.setResource('Pendencia').export(filters);
    }
}
