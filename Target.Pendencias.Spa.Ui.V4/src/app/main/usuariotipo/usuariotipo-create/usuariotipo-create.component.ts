import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { UsuarioTipoService } from '../usuariotipo.service';

@Component({
    selector: 'app-usuariotipo-create',
    templateUrl: './usuariotipo-create.component.html',
    styleUrls: ['./usuariotipo-create.component.css'],
})
export class UsuarioTipoCreateComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private usuarioTipoService: UsuarioTipoService, private route: ActivatedRoute, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.usuarioTipoService.initVM();

        this.usuarioTipoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.usuarioTipoService.save(model).subscribe((result) => {
            this.router.navigate(["/usuariotipo"])
        });
    }

}
