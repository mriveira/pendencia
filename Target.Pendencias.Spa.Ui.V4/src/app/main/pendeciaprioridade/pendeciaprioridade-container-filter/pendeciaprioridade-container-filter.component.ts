import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendeciaPrioridadeService } from '../pendeciaprioridade.service';

@Component({
    selector: 'app-pendeciaprioridade-container-filter',
    templateUrl: './pendeciaprioridade-container-filter.component.html',
    styleUrls: ['./pendeciaprioridade-container-filter.component.css'],
})
export class PendeciaPrioridadeContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private pendeciaPrioridadeService: PendeciaPrioridadeService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendeciaPrioridadeService.initVM();
    }

    ngOnInit() {

       
    }

}