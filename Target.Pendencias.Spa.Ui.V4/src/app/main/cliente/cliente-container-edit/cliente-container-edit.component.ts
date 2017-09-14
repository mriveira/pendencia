import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-container-edit',
    templateUrl: './cliente-container-edit.component.html',
    styleUrls: ['./cliente-container-edit.component.css'],
})
export class ClienteContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.clienteService.initVM();
    }

    ngOnInit() {

       
    }

}
