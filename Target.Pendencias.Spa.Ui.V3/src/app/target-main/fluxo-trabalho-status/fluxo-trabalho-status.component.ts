import { Component, OnInit} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { FluxoTrabalhoStatusService } from './fluxo-trabalho-status.service';

@Component({
    selector: 'app-fluxo-trabalho-status',
    templateUrl: './fluxo-trabalho-status.component.html',
    styleUrls: ['./fluxo-trabalho-status.component.css']
})
export class FluxoTrabalhoStatusComponent implements OnInit {

    vm: any;

    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private modalService: ModalDirective) {

        this.vm = {};
    }

    ngOnInit() {

        this.vm.mostrarFiltros = false;
        
        this.vm.ActionTitle = "FluxoTrabalhoStatus";
        this.vm.ActionDescription = "";
        this.vm.FilterResult = [];
        this.vm.ModelFilter = [];

        this.vm.Labels = {
            fluxoTrabalhoStatusId: 'fluxoTrabalhoStatusId',
            nome: 'nome',
            fluxoTrabalhoTipoId: 'fluxoTrabalhoTipoId',
            corFundo: 'corFundo',
            corFonte: 'corFonte',
            ordem: 'ordem'
        }

        this.fluxoTrabalhoStatusService.get().subscribe((data) => {
            this.vm.FilterResult = data.dataList;
        })

    }

    public onFilter(formFilter) {

        this.fluxoTrabalhoStatusService.get(formFilter.value).subscribe((data) => {
            this.vm.FilterResult = data.dataList;
        })
    }

    public onCreate() {


    }

    public onEdit() {

    }

    public onDetails() {

    }

    public onPrint() {

    }

    public onDelete() {

    }

    public onExport() {


    }

}
