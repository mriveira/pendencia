import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-create',
    templateUrl: './cliente-create.component.html',
    styleUrls: ['./cliente-create.component.css'],
})
export class ClienteCreateComponent implements OnInit {

    vm: ViewModel;
    id: number;
    private sub: any;

    constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.clienteService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.clienteService.save(model).subscribe((result) => {
            this.router.navigate(["/cliente"])
        });
    }

}
