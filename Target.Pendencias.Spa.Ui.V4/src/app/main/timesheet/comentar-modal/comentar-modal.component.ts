import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../../pendencia/pendencia.service';
import { GlobalService, NotificationParameters } from '../../../global.service';


@Component({
    selector: 'app-comentar-modal',
    templateUrl: './comentar-modal.component.html',
    styleUrls: ['./comentar-modal.component.css']
})
export class ComentarModalComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    @ViewChild('comentarModal') private comentarModal: ModalDirective;

    _id: number;
    title: string;
    form: FormGroup;

    constructor(private pendenciaService: PendenciaService) {
        this.form = new FormGroup({ comentario: new FormControl() });
    }

    ngOnInit() {
        GlobalService.notification.subscribe((not) => {
            if (not.event == "comentarPendencia") {
                this.title = "Comentar";
                this.show(not.data.id);
            }
        });
    }

    show(id: number) {
        this._id = id;
        this.comentarModal.show();
    }

    onSave(model) {

        var newModel = Object.assign(model, {
            pendenciaId: this._id,
            attributeBehavior: "ComentarPendencia",
            collectionComentarios: [{
                descricao: model != null ? model.comentario : null
            }]
        });

        this.pendenciaService.save(newModel).subscribe((response) => {
            this._obterPendencias(this.vm.modelFilter);
            this.comentarModal.hide();
        });

    }

    onCancel() {
        this.comentarModal.hide();
    }

    _obterPendencias(filter) {
        this.pendenciaService.getDataListCustom(filter).subscribe((response) => {
            this.vm.reletedViewModel.pendencias = response.dataList;
        });
    }

}
