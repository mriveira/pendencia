import { Component, OnInit, ViewChild, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { PendenciaService } from './pendencia.service';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService, NotificationParameters } from '../../global.service';


@Component({
    selector: 'app-pendencia',
    templateUrl: './pendencia.component.html',
    styleUrls: ['./pendencia.component.css'],
})
export class PendenciaComponent implements OnInit {

    vm: ViewModel<any>;

    operationConfimationYes: any;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;

    constructor(private pendenciaService: PendenciaService, private router: Router, private ref: ChangeDetectorRef) {

        this.vm = null;
    }

    ngOnInit() {

        this.vm = this.pendenciaService.initVM();
        this.pendenciaService.detectChanges(this.ref);

        this.pendenciaService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });

        this.updateCulture();
        GlobalService.getChangeCultureEmitter().subscribe((culture) => {
            this.updateCulture(culture);
        });

    }

    updateCulture(culture: string = null) {
        this.pendenciaService.updateCulture(culture).then(infos => {
            this.vm.infos = infos;
            this.vm.grid = this.pendenciaService.getInfoGrid(infos);
        });
    }


    public onFilter(modelFilter) {

        this.pendenciaService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })
    }

    public onExport() {
        this.pendenciaService.export().subscribe((result) => {
            var blob = new Blob([result._body], {
                type: 'application/vnd.ms-excel'
            });
            var downloadUrl = window.URL.createObjectURL(blob);
            window.location.href = downloadUrl;
        })
    }

    public onCreate() {

        this.vm.model = {};
        this.saveModal.config = { keyboard: false }
        this.saveModal.show();
        GlobalService.getNotificationEmitter().emit(new NotificationParameters("create", {
            model: this.vm.model
        }));
    }

    public onEdit(model) {

        this.saveModal.config = { keyboard: false }
        this.editModal.show();

        let newModel = model;
        if (model) {
            newModel = {
                pendenciaId: model.pendenciaId
            }
        }

        this.pendenciaService.get(newModel).subscribe((result) => {
            this.vm.model = result.dataList[0];
            GlobalService.getNotificationEmitter().emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    public onSave(model) {

        this.pendenciaService.save(model).subscribe((result) => {

            this.onFilter(this.vm.modelFilter);

            if (!this.vm.manterTelaAberta) {
                this.saveModal.hide();
                this.editModal.hide();
            }

        });

    }

    public onDetails(model) {

        this.detailsModal.show();

        let newModel = model;
        if (model) {
            newModel = {
                pendenciaId: model.pendenciaId
            }
        }
        this.pendenciaService.get(newModel).subscribe((result) => {
            this.vm.details = result.dataList[0];
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
    }


    public onPrint(model) {
        this.router.navigate(['/pendencia/print', model.pendenciaId]);
    }

    public onDeleteConfimation(model) {



        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {

                let newModel = model;
                if (model) {
                    newModel = {
                        pendenciaId: model.pendenciaId
                    }
                }

                this.pendenciaService.delete(model).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return model.pendenciaId != result.data.pendenciaId;
                    });
                    this.vm.summary.total = this.vm.filterResult.length
                });
            }
        );

        GlobalService.getOperationExecutedEmitter().emit(conf);
    }

    public onConfimationYes() {
        this.operationConfimationYes();
    }

    public onPageChanged(pageConfig) {

        let modelFilter = this.pendenciaService.pagingConfig(this.vm.modelFilter, pageConfig);
        this.pendenciaService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(order) {
       
        let modelFilter = this.pendenciaService.orderByConfig(this.vm.modelFilter, order);
        this.pendenciaService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });

    }

}
