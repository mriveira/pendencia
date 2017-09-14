import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { PendenciaTemposService } from '../pendenciatempos.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciatempos-print',
    templateUrl: './pendenciatempos-print.component.html',
    styleUrls: ['./pendenciatempos-print.component.css'],
})
export class PendenciaTemposPrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendenciaTemposService: PendenciaTemposService, private route: ActivatedRoute) {
		this.vm = null;
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.pendenciaTemposService.initVM();

        this.pendenciaTemposService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
