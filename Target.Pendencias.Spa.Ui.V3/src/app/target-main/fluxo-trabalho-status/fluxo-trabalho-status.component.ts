import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { FluxoTrabalhoStatusService } from './fluxo-trabalho-status.service';

@Component({
    selector: 'app-fluxo-trabalho-status',
    templateUrl: './fluxo-trabalho-status.component.html',
    styleUrls: ['./fluxo-trabalho-status.component.css']
})
export class FluxoTrabalhoStatusComponent implements OnInit {

    vm: any;
    closeResult: string;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;

    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService) {

        this.vm = {};
    }

    ngOnInit() {

        this.vm.dataValue = new Date();
        this.vm.decimalValue = 1.135;
        this.vm.integerValue = 2.544;
        this.vm.percentValue = 5.84852;
        this.vm.currencyValue = 98484.69;

        this.vm.mostrarFiltros = false;
        this.vm.actionTitle = "FluxoTrabalhoStatus";
        this.vm.actionDescription = "";
        this.vm.filterResult = [];
        this.vm.modelFilter = [];
        this.vm.model = {};

        this.vm.labels = {
            fluxoTrabalhoStatusId: 'fluxoTrabalhoStatusId',
            nome: 'nome',
            fluxoTrabalhoTipoId: 'fluxoTrabalhoTipoId',
            corFundo: 'corFundo',
            corFonte: 'corFonte',
            ordem: 'ordem'
        }

        this.fluxoTrabalhoStatusService.get().subscribe((data) => {
            this.vm.filterResult = data.dataList;
        })

    }


    public onFilter(filterModal) {

        this.fluxoTrabalhoStatusService.get(filterModal).subscribe((result) => {
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
            this.vm.filterResult.push(result.data);
        });

        this.saveModal.hide();
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
    }


    public onPrint() {

    }

    public onDelete(model) {

        this.fluxoTrabalhoStatusService.delete(model).subscribe((result) => {
            this.vm.filterResult.push(result.data);
        })

    }


    public onChange_makeSelect_model_fluxoTrabalhoTipoId(eventArgs) {
        console.log("onChange_makeSelect_model_fluxoTrabalhoTipoId", eventArgs)
        this.vm.model.fluxoTrabalhoTipoId = eventArgs;
    }

    public onChange_makeSelect_modelFilter_fluxoTrabalhoTipoId(eventArgs) {

        console.log("onChange_makeSelect_modelFilter_fluxoTrabalhoTipoId", eventArgs)
        this.vm.modelFilter.fluxoTrabalhoTipoId = eventArgs;
    }

}
