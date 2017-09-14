import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-container-create',
    templateUrl: './cliente-container-create.component.html',
    styleUrls: ['./cliente-container-create.component.css'],
})
export class ClienteContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.clienteService.initVM();
    }

    ngOnInit() {

       
    }

}
