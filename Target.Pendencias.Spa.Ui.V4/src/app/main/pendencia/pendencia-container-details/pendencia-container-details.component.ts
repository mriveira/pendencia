import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../pendencia.service';

@Component({
    selector: 'app-pendencia-container-details',
    templateUrl: './pendencia-container-details.component.html',
    styleUrls: ['./pendencia-container-details.component.css'],
})
export class PendenciaContainerDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendenciaService: PendenciaService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaService.initVM();
    }

    ngOnInit() {

       
    }

}
