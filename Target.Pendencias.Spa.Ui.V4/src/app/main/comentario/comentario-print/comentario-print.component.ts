import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ComentarioService } from '../comentario.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-comentario-print',
    templateUrl: './comentario-print.component.html',
    styleUrls: ['./comentario-print.component.css'],
})
export class ComentarioPrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private comentarioService: ComentarioService, private route: ActivatedRoute) {
		this.vm = null;
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.comentarioService.initVM();

        this.comentarioService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
