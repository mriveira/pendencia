import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { UsuarioTipoService } from '../usuariotipo.service';

@Component({
    selector: 'app-usuariotipo-container-filter',
    templateUrl: './usuariotipo-container-filter.component.html',
    styleUrls: ['./usuariotipo-container-filter.component.css'],
})
export class UsuarioTipoContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private usuarioTipoService: UsuarioTipoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.usuarioTipoService.initVM();
    }

    ngOnInit() {

       
    }

}
