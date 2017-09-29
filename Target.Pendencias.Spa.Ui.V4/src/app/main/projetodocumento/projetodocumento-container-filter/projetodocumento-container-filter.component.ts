import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoDocumentoService } from '../projetodocumento.service';

@Component({
    selector: 'app-projetodocumento-container-filter',
    templateUrl: './projetodocumento-container-filter.component.html',
    styleUrls: ['./projetodocumento-container-filter.component.css'],
})
export class ProjetoDocumentoContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private projetoDocumentoService: ProjetoDocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.projetoDocumentoService.initVM();
    }

    ngOnInit() {

       
    }

}
