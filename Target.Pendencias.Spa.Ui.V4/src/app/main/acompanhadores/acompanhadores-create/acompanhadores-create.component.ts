import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { AcompanhadoresService } from '../acompanhadores.service';

@Component({
    selector: 'app-acompanhadores-create',
    templateUrl: './acompanhadores-create.component.html',
    styleUrls: ['./acompanhadores-create.component.css'],
})
export class AcompanhadoresCreateComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private acompanhadoresService: AcompanhadoresService, private route: ActivatedRoute, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.acompanhadoresService.initVM();

        this.acompanhadoresService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.acompanhadoresService.save(model).subscribe((result) => {
            this.router.navigate(["/acompanhadores"])
        });
    }

}