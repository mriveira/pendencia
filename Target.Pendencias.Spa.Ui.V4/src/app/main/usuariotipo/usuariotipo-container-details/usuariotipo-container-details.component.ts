import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { UsuarioTipoService } from '../usuariotipo.service';

@Component({
    selector: 'app-usuariotipo-container-details',
    templateUrl: './usuariotipo-container-details.component.html',
    styleUrls: ['./usuariotipo-container-details.component.css'],
})
export class UsuarioTipoContainerDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private usuarioTipoService: UsuarioTipoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.usuarioTipoService.initVM();
    }

    ngOnInit() {

       
    }

}
