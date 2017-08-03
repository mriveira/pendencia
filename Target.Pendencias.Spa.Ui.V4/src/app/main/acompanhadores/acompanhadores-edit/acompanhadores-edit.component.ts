import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { AcompanhadoresService } from '../acompanhadores.service';

@Component({
    selector: 'app-acompanhadores-edit',
    templateUrl: './acompanhadores-edit.component.html',
    styleUrls: ['./acompanhadores-edit.component.css'],
})
export class AcompanhadoresEditComponent implements OnInit {

    vm: ViewModel;
    id: number;
    private sub: any;

    constructor(private acompanhadoresService: AcompanhadoresService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.acompanhadoresService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.acompanhadoresService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }

    onSave(model) {

        this.acompanhadoresService.save(model).subscribe((result) => {
            this.router.navigate(["/acompanhadores"])
        });
    }

}
