import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { PendenciaEventosService } from '../pendenciaeventos.service';

@Component({
    selector: 'app-pendenciaeventos-print',
    templateUrl: './pendenciaeventos-print.component.html',
    styleUrls: ['./pendenciaeventos-print.component.css'],
})
export class PendenciaEventosPrintComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private pendenciaEventosService: PendenciaEventosService, private route: ActivatedRoute) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.pendenciaEventosService.initVM();

        this.pendenciaEventosService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }
    

   


}
