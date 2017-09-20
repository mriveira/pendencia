import { Component, OnInit, Input, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../../pendencia/pendencia.service';
import { PendenciaTemposService } from '../../pendenciatempos/pendenciatempos.service';
import { GlobalService, NotificationParameters } from '../../../global.service';


@Component({
    selector: 'app-concluir-modal',
    templateUrl: './concluir-modal.component.html',
    styleUrls: ['./concluir-modal.component.css']
})
export class ConcluirModalComponent implements OnInit, OnDestroy {

    @Input() vm: ViewModel<any>;
    @ViewChild('concluirModal') private concluirModal: ModalDirective;

    _id: number;
    title: string;
    form: FormGroup;
    subscriptionNotification: EventEmitter<NotificationParameters>;

    constructor(private pendenciaService: PendenciaService, private pendenciaTemposService: PendenciaTemposService) {
        this.form = new FormGroup({ comentario: new FormControl() });
    }

    ngOnInit() {
        this.subscriptionNotification = GlobalService.getNotificationEmitter().subscribe((not) => {
            if (not.event == "concluirPendencia") {
                this.title = "Concluir";
                this.show(not.data.id);
            }
        });
    }

    show(id: number) {
        this._id = id;
        this.concluirModal.show();
    }

    onSave(model) {

        var newModel = Object.assign(model, {
            pendenciaId: this._id,
            attributeBehavior: "ConcluirPendencia",
            nota: model != null ? model.nota : null,
            collectionComentarios: [{
                Descricao: model != null ? model.comentario : null
            }]
        });

        this.pendenciaService.save(newModel).subscribe((response) => {
            this._obterPendencias(this.vm.modelFilter);
            this._obterTempos();
            this.concluirModal.hide();
        });

    }

    onCancel() {
        this.concluirModal.hide();
    }

    _obterPendencias(filter) {
        this.pendenciaService.getDataListCustom(filter).subscribe((response) => {
            this.vm.reletedViewModel.pendencias = response.dataList;
        });
    }

    _obterTempos() {
        this.pendenciaTemposService.get({
            attributeBehavior: "TimeSheet",
        }).subscribe((response) => {
            this.vm.reletedViewModel.tempo.tempos = response.dataList;
            this.vm.reletedViewModel.tempo.summary = response.summary;
        });
    }

    ngOnDestroy() {
        this.subscriptionNotification.unsubscribe();
    }

}
