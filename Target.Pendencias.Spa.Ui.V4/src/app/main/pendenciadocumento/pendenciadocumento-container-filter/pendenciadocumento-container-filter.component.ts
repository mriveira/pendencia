import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaDocumentoService } from '../pendenciadocumento.service';

@Component({
    selector: 'app-pendenciadocumento-container-filter',
    templateUrl: './pendenciadocumento-container-filter.component.html',
    styleUrls: ['./pendenciadocumento-container-filter.component.css'],
})
export class PendenciaDocumentoContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private pendenciaDocumentoService: PendenciaDocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaDocumentoService.initVM();
    }

    ngOnInit() {

       
    }

}
