import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { PendeciaPrioridadeService } from '../pendeciaprioridade.service';

@Component({
    selector: 'app-pendeciaprioridade-edit',
    templateUrl: './pendeciaprioridade-edit.component.html',
    styleUrls: ['./pendeciaprioridade-edit.component.css'],
})
export class PendeciaPrioridadeEditComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private pendeciaPrioridadeService: PendeciaPrioridadeService, private route: ActivatedRoute, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.pendeciaPrioridadeService.initVM();

        this.pendeciaPrioridadeService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.pendeciaPrioridadeService.save(model).subscribe((result) => {
            this.router.navigate(["/pendeciaprioridade"])
        });
    }

}
