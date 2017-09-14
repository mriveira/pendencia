import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ClienteService } from '../cliente.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-cliente-print',
    templateUrl: './cliente-print.component.html',
    styleUrls: ['./cliente-print.component.css'],
})
export class ClientePrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private clienteService: ClienteService, private route: ActivatedRoute) {
		this.vm = null;
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.clienteService.initVM();

        this.clienteService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
