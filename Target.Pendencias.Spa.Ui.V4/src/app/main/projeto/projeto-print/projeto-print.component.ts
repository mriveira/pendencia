import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ProjetoService } from '../projeto.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projeto-print',
    templateUrl: './projeto-print.component.html',
    styleUrls: ['./projeto-print.component.css'],
})
export class ProjetoPrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private projetoService: ProjetoService, private route: ActivatedRoute) {
		this.vm = null;
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.projetoService.initVM();

        this.projetoService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
