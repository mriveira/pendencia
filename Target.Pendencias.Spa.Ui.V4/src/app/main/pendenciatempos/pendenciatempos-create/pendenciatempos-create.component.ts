import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { PendenciaTemposService } from '../pendenciatempos.service';

@Component({
    selector: 'app-pendenciatempos-create',
    templateUrl: './pendenciatempos-create.component.html',
    styleUrls: ['./pendenciatempos-create.component.css'],
})
export class PendenciaTemposCreateComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private pendenciaTemposService: PendenciaTemposService, private route: ActivatedRoute, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.pendenciaTemposService.initVM();

        this.pendenciaTemposService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.pendenciaTemposService.save(model).subscribe((result) => {
            this.router.navigate(["/pendenciatempos"])
        });
    }

}
