import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ComentarioDocumentoService } from '../comentariodocumento.service';

@Component({
    selector: 'app-comentariodocumento-edit',
    templateUrl: './comentariodocumento-edit.component.html',
    styleUrls: ['./comentariodocumento-edit.component.css'],
})
export class ComentarioDocumentoEditComponent implements OnInit {

    vm: ViewModel;
    id: number;
    private sub: any;

    constructor(private comentarioDocumentoService: ComentarioDocumentoService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.comentarioDocumentoService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.comentarioDocumentoService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }

    onSave(model) {

        this.comentarioDocumentoService.save(model).subscribe((result) => {
            this.router.navigate(["/comentariodocumento"])
        });
    }

}
