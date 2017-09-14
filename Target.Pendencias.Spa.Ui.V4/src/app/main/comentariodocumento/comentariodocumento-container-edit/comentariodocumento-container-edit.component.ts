import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ComentarioDocumentoService } from '../comentariodocumento.service';

@Component({
    selector: 'app-comentariodocumento-container-edit',
    templateUrl: './comentariodocumento-container-edit.component.html',
    styleUrls: ['./comentariodocumento-container-edit.component.css'],
})
export class ComentarioDocumentoContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private comentarioDocumentoService: ComentarioDocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.comentarioDocumentoService.initVM();
    }

    ngOnInit() {

       
    }

}
