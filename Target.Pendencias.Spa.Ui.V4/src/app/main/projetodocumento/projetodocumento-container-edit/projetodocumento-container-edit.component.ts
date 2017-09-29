import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoDocumentoService } from '../projetodocumento.service';

@Component({
    selector: 'app-projetodocumento-container-edit',
    templateUrl: './projetodocumento-container-edit.component.html',
    styleUrls: ['./projetodocumento-container-edit.component.css'],
})
export class ProjetoDocumentoContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private projetoDocumentoService: ProjetoDocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.projetoDocumentoService.initVM();
    }

    ngOnInit() {

       
    }

}
