import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { DocumentoService } from '../documento.service';

@Component({
    selector: 'app-documento-container-edit',
    templateUrl: './documento-container-edit.component.html',
    styleUrls: ['./documento-container-edit.component.css'],
})
export class DocumentoContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private documentoService: DocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.documentoService.initVM();
    }

    ngOnInit() {

       
    }

}
