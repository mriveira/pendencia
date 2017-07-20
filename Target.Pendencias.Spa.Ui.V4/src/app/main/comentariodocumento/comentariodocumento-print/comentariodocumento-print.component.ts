import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ComentarioDocumentoService } from '../comentariodocumento.service';

@Component({
    selector: 'app-comentariodocumento-print',
    templateUrl: './comentariodocumento-print.component.html',
    styleUrls: ['./comentariodocumento-print.component.css'],
})
export class ComentarioDocumentoPrintComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private comentarioDocumentoService: ComentarioDocumentoService, private route: ActivatedRoute) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.comentarioDocumentoService.initVM();

        this.comentarioDocumentoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
