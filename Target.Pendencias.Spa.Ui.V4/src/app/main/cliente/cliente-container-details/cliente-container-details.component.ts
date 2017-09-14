import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-container-details',
    templateUrl: './cliente-container-details.component.html',
    styleUrls: ['./cliente-container-details.component.css'],
})
export class ClienteContainerDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.clienteService.initVM();
    }

    ngOnInit() {

       
    }

}
