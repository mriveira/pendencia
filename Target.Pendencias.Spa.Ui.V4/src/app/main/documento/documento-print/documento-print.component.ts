import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { DocumentoService } from '../documento.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-documento-print',
    templateUrl: './documento-print.component.html',
    styleUrls: ['./documento-print.component.css'],
})
export class DocumentoPrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private documentoService: DocumentoService, private route: ActivatedRoute) {
		this.vm = null;
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.documentoService.initVM();

        this.documentoService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
