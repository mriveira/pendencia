import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { PendenciaEventosService } from '../pendenciaeventos.service';

@Component({
    selector: 'app-pendenciaeventos-create',
    templateUrl: './pendenciaeventos-create.component.html',
    styleUrls: ['./pendenciaeventos-create.component.css'],
})
export class PendenciaEventosCreateComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private pendenciaEventosService: PendenciaEventosService, private route: ActivatedRoute, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.pendenciaEventosService.initVM();

        this.pendenciaEventosService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.pendenciaEventosService.save(model).subscribe((result) => {
            this.router.navigate(["/pendenciaeventos"])
        });
    }

}
