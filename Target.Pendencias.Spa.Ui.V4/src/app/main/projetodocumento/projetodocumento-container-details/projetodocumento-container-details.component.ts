import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoDocumentoService } from '../projetodocumento.service';

@Component({
    selector: 'app-projetodocumento-container-details',
    templateUrl: './projetodocumento-container-details.component.html',
    styleUrls: ['./projetodocumento-container-details.component.css'],
})
export class ProjetoDocumentoContainerDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private projetoDocumentoService: ProjetoDocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.projetoDocumentoService.initVM();
    }

    ngOnInit() {

       
    }

}
