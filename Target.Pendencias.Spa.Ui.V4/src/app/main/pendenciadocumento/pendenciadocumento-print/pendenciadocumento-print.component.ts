import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { PendenciaDocumentoService } from '../pendenciadocumento.service';

@Component({
    selector: 'app-pendenciadocumento-print',
    templateUrl: './pendenciadocumento-print.component.html',
    styleUrls: ['./pendenciadocumento-print.component.css'],
})
export class PendenciaDocumentoPrintComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private pendenciaDocumentoService: PendenciaDocumentoService, private route: ActivatedRoute) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.pendenciaDocumentoService.initVM();

        this.pendenciaDocumentoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }
    

   


}
