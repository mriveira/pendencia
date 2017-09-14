import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaTipoService } from '../pendenciatipo.service';

@Component({
    selector: 'app-pendenciatipo-container-create',
    templateUrl: './pendenciatipo-container-create.component.html',
    styleUrls: ['./pendenciatipo-container-create.component.css'],
})
export class PendenciaTipoContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private pendenciaTipoService: PendenciaTipoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaTipoService.initVM();
    }

    ngOnInit() {

       
    }

}
