import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaDocumentoService } from '../pendenciadocumento.service';

@Component({
    selector: 'app-pendenciadocumento-container-edit',
    templateUrl: './pendenciadocumento-container-edit.component.html',
    styleUrls: ['./pendenciadocumento-container-edit.component.css'],
})
export class PendenciaDocumentoContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendenciaDocumentoService: PendenciaDocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaDocumentoService.initVM();
    }

    ngOnInit() {

       
    }

}
