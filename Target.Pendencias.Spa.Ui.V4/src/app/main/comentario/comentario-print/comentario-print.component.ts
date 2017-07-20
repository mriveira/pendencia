import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ComentarioService } from '../comentario.service';

@Component({
    selector: 'app-comentario-print',
    templateUrl: './comentario-print.component.html',
    styleUrls: ['./comentario-print.component.css'],
})
export class ComentarioPrintComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private comentarioService: ComentarioService, private route: ActivatedRoute) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.comentarioService.initVM();

        this.comentarioService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }
    

   


}
