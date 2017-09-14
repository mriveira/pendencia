import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ComentarioService } from '../comentario.service';

@Component({
    selector: 'app-comentario-container-create',
    templateUrl: './comentario-container-create.component.html',
    styleUrls: ['./comentario-container-create.component.css'],
})
export class ComentarioContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private comentarioService: ComentarioService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.comentarioService.initVM();
    }

    ngOnInit() {

       
    }

}
