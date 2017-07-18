import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { FluxoTrabalhoStatusService } from '../fluxo-trabalho-status.service';

@Component({
    selector: 'app-usuario-print',
    templateUrl: './fusuario-print.component.html',
    styleUrls: ['./usuario-print.component.css'],
})
export class UsuarioPrintComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private usuarioService: UsuarioService, private route: ActivatedRoute) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.usuarioService.initVM();

        this.usuarioService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }
    

   


}
