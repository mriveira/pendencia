import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-print',
    templateUrl: './cliente-print.component.html',
    styleUrls: ['./cliente-print.component.css'],
})
export class ClientePrintComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private clienteService: ClienteService, private route: ActivatedRoute) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.clienteService.initVM();

        this.clienteService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
