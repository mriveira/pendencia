import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaTipoService } from '../pendenciatipo.service';

@Component({
    selector: 'app-pendenciatipo-container-edit',
    templateUrl: './pendenciatipo-container-edit.component.html',
    styleUrls: ['./pendenciatipo-container-edit.component.css'],
})
export class PendenciaTipoContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendenciaTipoService: PendenciaTipoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaTipoService.initVM();
    }

    ngOnInit() {

       
    }

}
