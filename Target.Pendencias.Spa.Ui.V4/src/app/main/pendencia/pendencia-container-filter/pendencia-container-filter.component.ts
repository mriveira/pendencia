import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../pendencia.service';

@Component({
    selector: 'app-pendencia-container-filter',
    templateUrl: './pendencia-container-filter.component.html',
    styleUrls: ['./pendencia-container-filter.component.css'],
})
export class PendenciaContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private pendenciaService: PendenciaService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaService.initVM();
    }

    ngOnInit() {

       
    }

}
