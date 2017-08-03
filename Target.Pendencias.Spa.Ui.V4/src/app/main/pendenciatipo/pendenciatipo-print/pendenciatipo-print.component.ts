import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { PendenciaTipoService } from '../pendenciatipo.service';

@Component({
    selector: 'app-pendenciatipo-print',
    templateUrl: './pendenciatipo-print.component.html',
    styleUrls: ['./pendenciatipo-print.component.css'],
})
export class PendenciaTipoPrintComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private pendenciaTipoService: PendenciaTipoService, private route: ActivatedRoute) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.pendenciaTipoService.initVM();

        this.pendenciaTipoService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
