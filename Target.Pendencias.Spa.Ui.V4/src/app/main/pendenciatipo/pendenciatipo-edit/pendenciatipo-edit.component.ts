import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaTipoService } from '../pendenciatipo.service';

@Component({
    selector: 'app-pendenciatipo-edit',
    templateUrl: './pendenciatipo-edit.component.html',
    styleUrls: ['./pendenciatipo-edit.component.css'],
})
export class PendenciaTipoEditComponent implements OnInit {

    vm: ViewModel;
    id: number;
    private sub: any;

    constructor(private pendenciaTipoService: PendenciaTipoService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.pendenciaTipoService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.pendenciaTipoService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }

    onSave(model) {

        this.pendenciaTipoService.save(model).subscribe((result) => {
            this.router.navigate(["/pendenciatipo"])
        });
    }

}
