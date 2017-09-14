import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendeciaPrioridadeService } from '../pendeciaprioridade.service';

@Component({
    selector: 'app-pendeciaprioridade-container-edit',
    templateUrl: './pendeciaprioridade-container-edit.component.html',
    styleUrls: ['./pendeciaprioridade-container-edit.component.css'],
})
export class PendeciaPrioridadeContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendeciaPrioridadeService: PendeciaPrioridadeService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendeciaPrioridadeService.initVM();
    }

    ngOnInit() {

       
    }

}
