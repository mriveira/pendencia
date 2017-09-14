import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ComentarioDocumentoService } from '../comentariodocumento.service';

@Component({
    selector: 'app-comentariodocumento-container-filter',
    templateUrl: './comentariodocumento-container-filter.component.html',
    styleUrls: ['./comentariodocumento-container-filter.component.css'],
})
export class ComentarioDocumentoContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private comentarioDocumentoService: ComentarioDocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.comentarioDocumentoService.initVM();
    }

    ngOnInit() {

       
    }

}
