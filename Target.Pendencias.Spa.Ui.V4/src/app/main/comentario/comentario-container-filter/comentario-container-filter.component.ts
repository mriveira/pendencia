import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ComentarioService } from '../comentario.service';

@Component({
    selector: 'app-comentario-container-filter',
    templateUrl: './comentario-container-filter.component.html',
    styleUrls: ['./comentario-container-filter.component.css'],
})
export class ComentarioContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private comentarioService: ComentarioService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.comentarioService.initVM();
    }

    ngOnInit() {

       
    }

}
