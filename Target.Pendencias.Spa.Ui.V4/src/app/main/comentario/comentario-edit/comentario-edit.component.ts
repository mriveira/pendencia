import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ComentarioService } from '../comentario.service';

@Component({
    selector: 'app-comentario-edit',
    templateUrl: './comentario-edit.component.html',
    styleUrls: ['./comentario-edit.component.css'],
})
export class ComentarioEditComponent implements OnInit {

    vm: ViewModel;
    id: number;
    private sub: any;

    constructor(private comentarioService: ComentarioService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.comentarioService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


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
