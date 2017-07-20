import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';

@Component({
    selector: 'app-projetofluxotrabalhostatus-print',
    templateUrl: './projetofluxotrabalhostatus-print.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-print.component.css'],
})
export class ProjetoFluxoTrabalhoStatusPrintComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private route: ActivatedRoute) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.projetoFluxoTrabalhoStatusService.initVM();

        this.projetoFluxoTrabalhoStatusService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }
    

   


}
