import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-edit',
    templateUrl: './cliente-edit.component.html',
    styleUrls: ['./cliente-edit.component.css'],
})
export class ClienteEditComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.clienteService.initVM();

        this.clienteService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.clienteService.save(model).subscribe((result) => {
            this.router.navigate(["/cliente"])
        });
    }

}
