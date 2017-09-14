import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { DocumentoService } from '../documento.service';

@Component({
    selector: 'app-documento-container-filter',
    templateUrl: './documento-container-filter.component.html',
    styleUrls: ['./documento-container-filter.component.css'],
})
export class DocumentoContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private documentoService: DocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.documentoService.initVM();
    }

    ngOnInit() {

       
    }

}
