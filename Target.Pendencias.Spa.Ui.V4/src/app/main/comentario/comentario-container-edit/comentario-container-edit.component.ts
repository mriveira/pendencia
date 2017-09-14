import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ComentarioService } from '../comentario.service';

@Component({
    selector: 'app-comentario-container-edit',
    templateUrl: './comentario-container-edit.component.html',
    styleUrls: ['./comentario-container-edit.component.css'],
})
export class ComentarioContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private comentarioService: ComentarioService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.comentarioService.initVM();
    }

    ngOnInit() {

       
    }

}
