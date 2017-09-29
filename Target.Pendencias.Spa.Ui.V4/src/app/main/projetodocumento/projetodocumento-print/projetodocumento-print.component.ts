import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ProjetoDocumentoService } from '../projetodocumento.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projetodocumento-print',
    templateUrl: './projetodocumento-print.component.html',
    styleUrls: ['./projetodocumento-print.component.css'],
})
export class ProjetoDocumentoPrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private projetoDocumentoService: ProjetoDocumentoService, private route: ActivatedRoute) {
		this.vm = null;
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.projetoDocumentoService.initVM();

        this.projetoDocumentoService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
