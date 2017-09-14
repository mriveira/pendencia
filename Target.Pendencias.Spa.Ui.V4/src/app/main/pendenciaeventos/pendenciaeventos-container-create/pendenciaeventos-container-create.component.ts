import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaEventosService } from '../pendenciaeventos.service';

@Component({
    selector: 'app-pendenciaeventos-container-create',
    templateUrl: './pendenciaeventos-container-create.component.html',
    styleUrls: ['./pendenciaeventos-container-create.component.css'],
})
export class PendenciaEventosContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private pendenciaEventosService: PendenciaEventosService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaEventosService.initVM();
    }

    ngOnInit() {

       
    }

}
