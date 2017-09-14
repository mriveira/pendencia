import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { UsuarioTipoService } from '../usuariotipo.service';

@Component({
    selector: 'app-usuariotipo-container-edit',
    templateUrl: './usuariotipo-container-edit.component.html',
    styleUrls: ['./usuariotipo-container-edit.component.css'],
})
export class UsuarioTipoContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private usuarioTipoService: UsuarioTipoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.usuarioTipoService.initVM();
    }

    ngOnInit() {

       
    }

}
