import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { PendeciaPrioridadeService } from '../pendeciaprioridade.service';

@Component({
    selector: 'app-pendeciaprioridade-print',
    templateUrl: './pendeciaprioridade-print.component.html',
    styleUrls: ['./pendeciaprioridade-print.component.css'],
})
export class PendeciaPrioridadePrintComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private pendeciaPrioridadeService: PendeciaPrioridadeService, private route: ActivatedRoute) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.pendeciaPrioridadeService.initVM();

        this.pendeciaPrioridadeService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }
    

   


}
