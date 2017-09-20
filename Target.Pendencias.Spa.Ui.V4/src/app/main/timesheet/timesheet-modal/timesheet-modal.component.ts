import { Component, OnInit, Input, ViewChild, OnDestroy, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../../pendencia/pendencia.service';
import { PendenciaTemposService } from '../../pendenciatempos/pendenciatempos.service';
import { GlobalService, NotificationParameters } from '../../../global.service';

@Component({
    selector: 'app-timesheet-modal',
    templateUrl: './timesheet-modal.component.html',
    styleUrls: ['./timesheet-modal.component.css']
})
export class TimesheetModalComponent implements OnInit, OnDestroy {

    @Input() vm: ViewModel<any>;
    @ViewChild('timesheetModal') private timesheetModal: ModalDirective;

    _id: number;
    title: string;
    form: FormGroup;
    subscriptionNotification: EventEmitter<NotificationParameters>;

    constructor(private pendenciaService: PendenciaService, private pendenciaTemposService: PendenciaTemposService) {
        this.form = new FormGroup({
            inicio: new FormControl(),
            fim: new FormControl(),
            nota: new FormControl()
        });
    }

    ngOnInit() {

        this.vm.reletedViewModel.timeSheet = {};
        this.subscriptionNotification = GlobalService.getNotificationEmitter().subscribe((not) => {

            if (not.event == "timeSheetEdit") {
                this.title = "Timesheet";

                console.log("Timesheet");

                this.pendenciaTemposService.get({ id: not.data.id }).subscribe((response) => {

                    this.vm.reletedViewModel.timeSheet = response.data;
                    this.show(not.data.id);
                })

            }
        });
    }

    show(id: number) {
        this._id = id;
        this.timesheetModal.show();
    }

    onSave(model) {

        var newModel = Object.assign(model, {
            pendenciaTemposId: this._id,
            inicio: model.inicio,
            fim: model.fim,
            nota: model.nota,
            attributeBehavior: "EditarTempo"
        });

        this.pendenciaTemposService.save(newModel).subscribe((response) => {
            this._obterPendencias(this.vm.modelFilter);
            this._obterTempos({
                attributeBehavior: "TimeSheet",
            });
            this.timesheetModal.hide();
        });

    }

    onCancel() {
        this.timesheetModal.hide();
    }

    _obterPendencias(filter) {
        this.pendenciaService.getDataListCustom(filter).subscribe((response) => {
            this.vm.reletedViewModel.pendencias = response.dataList;
        });
    }

    _obterTempos(filter) {
        this.pendenciaTemposService.get(filter).subscribe((response) => {
            this.vm.reletedViewModel.tempo.tempos = response.dataList;
            this.vm.reletedViewModel.tempo.summary = response.summary;
        });
    }

    ngOnDestroy() {
        this.subscriptionNotification.unsubscribe();
    }

}
