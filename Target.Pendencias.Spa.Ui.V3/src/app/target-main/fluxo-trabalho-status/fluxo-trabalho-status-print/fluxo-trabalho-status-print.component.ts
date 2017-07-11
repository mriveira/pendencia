import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { FluxoTrabalhoStatusService } from '../fluxo-trabalho-status.service';

@Component({
    selector: 'app-fluxo-trabalho-status-print',
    templateUrl: './fluxo-trabalho-status-print.component.html',
    styleUrls: ['./fluxo-trabalho-status-print.component.css'],
})
export class FluxoTrabalhoStatusPrintComponent implements OnInit {

    vm: any;
   

    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService) {

        this.vm = {};
    }

    ngOnInit() {

 
        this.vm.actionTitle = "FluxoTrabalhoStatus";
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
    

    public onCancel() {

       
    }


}
