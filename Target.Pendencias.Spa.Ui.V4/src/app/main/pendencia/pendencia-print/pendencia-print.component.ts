import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { PendenciaService } from '../pendencia.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendencia-print',
    templateUrl: './pendencia-print.component.html',
    styleUrls: ['./pendencia-print.component.css'],
})
export class PendenciaPrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendenciaService: PendenciaService, private route: ActivatedRoute) {
		this.vm = null;
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.pendenciaService.initVM();

        this.pendenciaService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
