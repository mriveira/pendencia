import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaTemposService } from '../pendenciatempos.service';

@Component({
    selector: 'app-pendenciatempos-container-edit',
    templateUrl: './pendenciatempos-container-edit.component.html',
    styleUrls: ['./pendenciatempos-container-edit.component.css'],
})
export class PendenciaTemposContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendenciaTemposService: PendenciaTemposService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaTemposService.initVM();
    }

    ngOnInit() {

       
    }

}
