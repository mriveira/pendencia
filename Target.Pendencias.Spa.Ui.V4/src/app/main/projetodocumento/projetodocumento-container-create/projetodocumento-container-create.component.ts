import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoDocumentoService } from '../projetodocumento.service';

@Component({
    selector: 'app-projetodocumento-container-create',
    templateUrl: './projetodocumento-container-create.component.html',
    styleUrls: ['./projetodocumento-container-create.component.css'],
})
export class ProjetoDocumentoContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private projetoDocumentoService: ProjetoDocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.projetoDocumentoService.initVM();
    }

    ngOnInit() {

       
    }

}
