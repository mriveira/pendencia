import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaEventosService } from '../pendenciaeventos.service';

@Component({
    selector: 'app-pendenciaeventos-container-details',
    templateUrl: './pendenciaeventos-container-details.component.html',
    styleUrls: ['./pendenciaeventos-container-details.component.css'],
})
export class PendenciaEventosContainerDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendenciaEventosService: PendenciaEventosService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaEventosService.initVM();
    }

    ngOnInit() {

       
    }

}
