import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { UsuarioTipoService } from '../usuariotipo.service';

@Component({
    selector: 'app-usuariotipo-create',
    templateUrl: './usuariotipo-create.component.html',
    styleUrls: ['./usuariotipo-create.component.css'],
})
export class UsuarioTipoCreateComponent implements OnInit {

    vm: ViewModel;
    id: number;
    private sub: any;

    constructor(private usuarioTipoService: UsuarioTipoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.usuarioTipoService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.usuarioTipoService.save(model).subscribe((result) => {
            this.router.navigate(["/usuariotipo"])
        });
    }

}
