import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { AcompanhadoresService } from '../acompanhadores.service';

@Component({
    selector: 'app-acompanhadores-print',
    templateUrl: './acompanhadores-print.component.html',
    styleUrls: ['./acompanhadores-print.component.css'],
})
export class AcompanhadoresPrintComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private acompanhadoresService: AcompanhadoresService, private route: ActivatedRoute) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.acompanhadoresService.initVM();

        this.acompanhadoresService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
