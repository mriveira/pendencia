import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { DocumentoService } from '../documento.service';

@Component({
    selector: 'app-documento-container-details',
    templateUrl: './documento-container-details.component.html',
    styleUrls: ['./documento-container-details.component.css'],
})
export class DocumentoContainerDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private documentoService: DocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.documentoService.initVM();
    }

    ngOnInit() {

       
    }

}
