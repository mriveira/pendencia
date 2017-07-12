import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { FluxoTrabalhoStatusService } from './fluxo-trabalho-status.service';


@Component({
    selector: 'app-fluxo-trabalho-status',
    templateUrl: './fluxo-trabalho-status.component.html',
    styleUrls: ['./fluxo-trabalho-status.component.css']
})
export class FluxoTrabalhoStatusComponent implements OnInit {

    vm: any;
    operationConfimationYes: any;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;
    @ViewChild('confirmModal') private confirmModal: ModalDirective;

    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {


        this.vm = this.fluxoTrabalhoStatusService.initVM();
        

        this.fluxoTrabalhoStatusService.get().subscribe((data) => {
            this.vm.filterResult = data.dataList;
        })

    }


    public onFilter(modelFilter) {

        this.fluxoTrabalhoStatusService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
        })
    }

    public onExport() {


    }

    public onCreate() {

        this.saveModal.show();
    }

    public onEdit(model) {

        this.editModal.show();
        this.fluxoTrabalhoStatusService.get({ id: model}).subscribe((result) => {
            this.vm.model = result.data;
        })

    }

    public onSave(model) {

        this.fluxoTrabalhoStatusService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (el) {
                return el.fluxoTrabalhoStatusId !== result.data.fluxoTrabalhoStatusId;
            });
            this.vm.filterResult.push(result.data);
        });

        this.saveModal.hide();
        this.editModal.hide();
    }
  
    public onDetails(model) {

        this.detailsModal.show();

        this.fluxoTrabalhoStatusService.get({ id: model }).subscribe((result) => {
            this.vm.model = result.data;
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
        this.confirmModal.hide();
    }


    public onPrint(id) {
        this.router.navigate(['/fluxotrabalhostatus/print', id]);
    }

    public onDeleteConfimation(model) {

        this.confirmModal.show();

        this.operationConfimationYes = function () {

            this.fluxoTrabalhoStatusService.delete({ fluxoTrabalhoStatusId: model }).subscribe((result) => {
                this.vm.filterResult = this.vm.filterResult.filter(function (el) {
                    return el.fluxoTrabalhoStatusId !== model;
                });
                this.confirmModal.hide();
            }, (result) => {
                this.confirmModal.hide()
            })
        };
    }

    public onConfimationYes() {

        this.operationConfimationYes();
    }

  
    public onChange_makeSelect_model_fluxoTrabalhoTipoId(eventArgs) {
        this.vm.model.fluxoTrabalhoTipoId = eventArgs;
    }

    public onChange_makeSelect_modelFilter_fluxoTrabalhoTipoId(eventArgs) {

        this.vm.modelFilter.fluxoTrabalhoTipoId = eventArgs;
    }

}
