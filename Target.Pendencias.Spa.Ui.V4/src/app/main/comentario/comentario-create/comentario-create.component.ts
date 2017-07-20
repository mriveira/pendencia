import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ComentarioService } from '../comentario.service';

@Component({
    selector: 'app-comentario-create',
    templateUrl: './comentario-create.component.html',
    styleUrls: ['./comentario-create.component.css'],
})
export class ComentarioCreateComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private comentarioService: ComentarioService, private route: ActivatedRoute, private router: Router) {

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

    onSave(model) {

        this.comentarioService.save(model).subscribe((result) => {
            this.router.navigate(["/comentario"])
        });
    }

}
