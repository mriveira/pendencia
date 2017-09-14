import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-container-filter',
    templateUrl: './cliente-container-filter.component.html',
    styleUrls: ['./cliente-container-filter.component.css'],
})
export class ClienteContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.clienteService.initVM();
    }

    ngOnInit() {

       
    }

}
