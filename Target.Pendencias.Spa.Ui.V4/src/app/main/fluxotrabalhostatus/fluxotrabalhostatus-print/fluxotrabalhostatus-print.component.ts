import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';

@Component({
    selector: 'app-fluxotrabalhostatus-print',
    templateUrl: './fluxotrabalhostatus-print.component.html',
    styleUrls: ['./fluxotrabalhostatus-print.component.css'],
})
export class FluxoTrabalhoStatusPrintComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private route: ActivatedRoute) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.fluxoTrabalhoStatusService.initVM();

        this.fluxoTrabalhoStatusService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
