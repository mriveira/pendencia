import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projetofluxotrabalhostatus-print',
    templateUrl: './projetofluxotrabalhostatus-print.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-print.component.css'],
})
export class ProjetoFluxoTrabalhoStatusPrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private route: ActivatedRoute) {
		this.vm = null;
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.projetoFluxoTrabalhoStatusService.initVM();

        this.projetoFluxoTrabalhoStatusService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
