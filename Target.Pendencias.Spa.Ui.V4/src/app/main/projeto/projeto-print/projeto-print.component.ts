import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProjetoService } from '../projeto.service';

@Component({
    selector: 'app-projeto-print',
    templateUrl: './projeto-print.component.html',
    styleUrls: ['./projeto-print.component.css'],
})
export class ProjetoPrintComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private projetoService: ProjetoService, private route: ActivatedRoute) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.projetoService.initVM();

        this.projetoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
