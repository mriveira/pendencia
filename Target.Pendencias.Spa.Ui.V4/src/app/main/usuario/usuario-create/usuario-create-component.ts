import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { UsuarioService } from '../Usuario.service';

@Component({
    selector: 'usuario-status-edit',
    templateUrl: './usuario-edit.component.html',
    styleUrls: ['./usuario-edit.component.css'],
})
export class UsuarioEditComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private usuarioService: usuarioService, private route: ActivatedRoute, private router: Router) {

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

    onSave(model) {

        this.usuario.save(model).subscribe((result) => {
            this.router.navigate(["/usuario"])
        });
    }

}
