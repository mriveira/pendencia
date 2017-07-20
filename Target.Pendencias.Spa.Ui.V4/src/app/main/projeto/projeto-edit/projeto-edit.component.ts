import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProjetoService } from '../projeto.service';

@Component({
    selector: 'app-projeto-edit',
    templateUrl: './projeto-edit.component.html',
    styleUrls: ['./projeto-edit.component.css'],
})
export class ProjetoEditComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private projetoService: ProjetoService, private route: ActivatedRoute, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.projetoService.initVM();

        this.projetoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.projetoService.save(model).subscribe((result) => {
            this.router.navigate(["/projeto"])
        });
    }

}
