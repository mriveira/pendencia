import { Component, OnInit, Input, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../../pendencia/pendencia.service';
import { PendenciaTemposService } from '../../pendenciatempos/pendenciatempos.service';

import { GlobalService, NotificationParameters } from '../../../global.service';

@Component({
    selector: 'app-parar-modal',
    templateUrl: './parar-modal.component.html',
    styleUrls: ['./parar-modal.component.css']
})
export class PararModalComponent implements OnInit, OnDestroy {

    @Input() vm: ViewModel<any>;
    @ViewChild('pararModal') private pararModal: ModalDirective;

    _id: number;
    title: string;
    form: FormGroup;
    subscriptionNotification: EventEmitter<NotificationParameters>;

    constructor(private pendenciaService: PendenciaService, private pendenciaTemposService: PendenciaTemposService) {
        this.form = new FormGroup({ nota: new FormControl() });
    }

    ngOnInit() {
        this.subscriptionNotification = GlobalService.getNotificationEmitter().subscribe((not) => {
            if (not.event == "pararPendencia") {
                this.title = "Parar";
                this.show(not.data.id);
            }
        });
    }

    show(id: number) {
        this._id = id;
        this.pararModal.show();
    }

    onSave(model) {

        var newModel = Object.assign(model, {
            pendenciaId: this._id,
            attributeBehavior: "Stop",
            nota: model != null ? model.nota : null
        })

        this.pendenciaService.save(newModel).subscribe((response) => {
            this._obterPendencias(this.vm.modelFilter);
            this._obterTempos();
            this.pararModal.hide();
        });

    }

    onCancel() {
        this.pararModal.hide();
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
