import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaDocumentoService } from '../pendenciadocumento.service';

@Component({
    selector: 'app-pendenciadocumento-container-create',
    templateUrl: './pendenciadocumento-container-create.component.html',
    styleUrls: ['./pendenciadocumento-container-create.component.css'],
})
export class PendenciaDocumentoContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private pendenciaDocumentoService: PendenciaDocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaDocumentoService.initVM();
    }

    ngOnInit() {

       
    }

}
