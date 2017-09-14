import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { UsuarioService } from '../usuario.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-usuario-print',
    templateUrl: './usuario-print.component.html',
    styleUrls: ['./usuario-print.component.css'],
})
export class UsuarioPrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private usuarioService: UsuarioService, private route: ActivatedRoute) {
		this.vm = null;
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.usuarioService.initVM();

        this.usuarioService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
