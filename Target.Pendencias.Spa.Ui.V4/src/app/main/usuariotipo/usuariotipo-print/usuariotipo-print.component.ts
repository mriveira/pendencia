import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { UsuarioTipoService } from '../usuariotipo.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-usuariotipo-print',
    templateUrl: './usuariotipo-print.component.html',
    styleUrls: ['./usuariotipo-print.component.css'],
})
export class UsuarioTipoPrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private usuarioTipoService: UsuarioTipoService, private route: ActivatedRoute) {
		this.vm = null;
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.usuarioTipoService.initVM();

        this.usuarioTipoService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
