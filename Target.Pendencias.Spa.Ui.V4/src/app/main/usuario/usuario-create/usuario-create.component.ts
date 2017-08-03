import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { UsuarioService } from '../usuario.service';

@Component({
    selector: 'app-usuario-create',
    templateUrl: './usuario-create.component.html',
    styleUrls: ['./usuario-create.component.css'],
})
export class UsuarioCreateComponent implements OnInit {

    vm: ViewModel;
    id: number;
    private sub: any;

    constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.usuarioService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.usuarioService.save(model).subscribe((result) => {
            this.router.navigate(["/usuario"])
        });
    }

}
