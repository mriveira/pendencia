import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-fluxotrabalhostatus-print',
    templateUrl: './fluxotrabalhostatus-print.component.html',
    styleUrls: ['./fluxotrabalhostatus-print.component.css'],
})
export class FluxoTrabalhoStatusPrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private route: ActivatedRoute) {
		this.vm = null;
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.fluxoTrabalhoStatusService.initVM();

        this.fluxoTrabalhoStatusService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
