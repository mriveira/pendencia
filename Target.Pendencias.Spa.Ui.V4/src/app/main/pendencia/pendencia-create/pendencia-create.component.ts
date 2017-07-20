import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { PendenciaService } from '../pendencia.service';

@Component({
    selector: 'app-pendencia-create',
    templateUrl: './pendencia-create.component.html',
    styleUrls: ['./pendencia-create.component.css'],
})
export class PendenciaCreateComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private pendenciaService: PendenciaService, private route: ActivatedRoute, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.pendenciaService.initVM();

        this.pendenciaService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.pendenciaService.save(model).subscribe((result) => {
            this.router.navigate(["/pendencia"])
        });
    }

}
