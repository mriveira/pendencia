import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { PendenciaService } from '../pendencia.service';

@Component({
    selector: 'app-pendencia-print',
    templateUrl: './pendencia-print.component.html',
    styleUrls: ['./pendencia-print.component.css'],
})
export class PendenciaPrintComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private pendenciaService: PendenciaService, private route: ActivatedRoute) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.pendenciaService.initVM();

        this.pendenciaService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
