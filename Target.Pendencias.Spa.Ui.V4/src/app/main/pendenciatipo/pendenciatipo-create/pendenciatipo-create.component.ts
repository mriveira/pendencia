import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { PendenciaTipoService } from '../pendenciatipo.service';

@Component({
    selector: 'app-pendenciatipo-create',
    templateUrl: './pendenciatipo-create.component.html',
    styleUrls: ['./pendenciatipo-create.component.css'],
})
export class PendenciaTipoCreateComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private pendenciaTipoService: PendenciaTipoService, private route: ActivatedRoute, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.pendenciaTipoService.initVM();

        this.pendenciaTipoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.pendenciaTipoService.save(model).subscribe((result) => {
            this.router.navigate(["/pendenciatipo"])
        });
    }

}
