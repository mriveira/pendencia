﻿import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';
import { ProjetoDocumentoServiceFields } from './projetodocumento.service.fields';
import { GlobalServiceCulture, Translated, TranslatedField } from '../../global.service.culture';
import { MainService } from '../main.service';

@Injectable()
export class ProjetoDocumentoService extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>,private serviceFields: ProjetoDocumentoServiceFields, private globalServiceCulture: GlobalServiceCulture, private mainService: MainService) {

		super();
        this._form = this.serviceFields.getFormFields({
            documento: new FormControl()
        });

    }

    initVM(): ViewModel<any> {

        return new ViewModel({
            mostrarFiltros: false,
            actionTitle: " ProjetoDocumento",
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
        return this.serviceFields.getInfosFields({
            tags: { label: 'Tags', type: 'file', isKey: false, list: false },
            documento: { label: 'documento', type: 'file', isKey: false, list: false }
        });
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
        var grupo = "ProjetoDocumento";
        return this.globalServiceCulture.getResource(grupo, culture, this.getInfos(), (culture, infosFields) => {
            return new Promise((resolve, reject) => {
                var translated = new Translated([]);
                return resolve(this.globalServiceCulture.setResource(grupo, translated.get(culture), infosFields));
            });
        });
    }

    get(filters?: any): Observable<any> {
        return this.api.setResource('ProjetoDocumento').get(filters);
    }

	getDataCustom(filters?: any): Observable<any> {
        return this.api.setResource('ProjetoDocumento').getDataCustom(filters);
    }

	getDataListCustom(filters?: any): Observable<any> {
        return this.api.setResource('ProjetoDocumento').getDataListCustom(filters);
    }

    save(model: any): Observable<any> {

        if ( model.projetoId != undefined &&  model.documentoId != undefined) {
            return this.api.setResource('ProjetoDocumento').put(model);
        }

        return this.api.setResource('ProjetoDocumento').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('ProjetoDocumento').delete(model);

    }
    
    export(filters?: any): Observable<any>
    {
        return this.api.setResource('ProjetoDocumento').export(filters);
    }
}
