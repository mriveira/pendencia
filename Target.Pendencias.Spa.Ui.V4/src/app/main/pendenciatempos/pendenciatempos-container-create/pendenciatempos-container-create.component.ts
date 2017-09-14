import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaTemposService } from '../pendenciatempos.service';

@Component({
    selector: 'app-pendenciatempos-container-create',
    templateUrl: './pendenciatempos-container-create.component.html',
    styleUrls: ['./pendenciatempos-container-create.component.css'],
})
export class PendenciaTemposContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private pendenciaTemposService: PendenciaTemposService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaTemposService.initVM();
    }

    ngOnInit() {

       
    }

}
