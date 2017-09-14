import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { DocumentoService } from '../documento.service';

@Component({
    selector: 'app-documento-container-create',
    templateUrl: './documento-container-create.component.html',
    styleUrls: ['./documento-container-create.component.css'],
})
export class DocumentoContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private documentoService: DocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.documentoService.initVM();
    }

    ngOnInit() {

       
    }

}
