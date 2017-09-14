import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaEventosService } from '../pendenciaeventos.service';

@Component({
    selector: 'app-pendenciaeventos-container-filter',
    templateUrl: './pendenciaeventos-container-filter.component.html',
    styleUrls: ['./pendenciaeventos-container-filter.component.css'],
})
export class PendenciaEventosContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private pendenciaEventosService: PendenciaEventosService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaEventosService.initVM();
    }

    ngOnInit() {

       
    }

}
