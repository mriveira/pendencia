import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaTipoService } from '../pendenciatipo.service';

@Component({
    selector: 'app-pendenciatipo-container-filter',
    templateUrl: './pendenciatipo-container-filter.component.html',
    styleUrls: ['./pendenciatipo-container-filter.component.css'],
})
export class PendenciaTipoContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private pendenciaTipoService: PendenciaTipoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaTipoService.initVM();
    }

    ngOnInit() {

       
    }

}
