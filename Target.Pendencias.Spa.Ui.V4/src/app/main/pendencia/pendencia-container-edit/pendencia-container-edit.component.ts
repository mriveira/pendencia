import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../pendencia.service';

@Component({
    selector: 'app-pendencia-container-edit',
    templateUrl: './pendencia-container-edit.component.html',
    styleUrls: ['./pendencia-container-edit.component.css'],
})
export class PendenciaContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendenciaService: PendenciaService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaService.initVM();
    }

    ngOnInit() {

       
    }

}
