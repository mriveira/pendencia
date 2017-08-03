import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendeciaPrioridadeService } from '../pendeciaprioridade.service';

@Component({
    selector: 'app-pendeciaprioridade-edit',
    templateUrl: './pendeciaprioridade-edit.component.html',
    styleUrls: ['./pendeciaprioridade-edit.component.css'],
})
export class PendeciaPrioridadeEditComponent implements OnInit {

    vm: ViewModel;
    id: number;
    private sub: any;

    constructor(private pendeciaPrioridadeService: PendeciaPrioridadeService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.pendeciaPrioridadeService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.pendeciaPrioridadeService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }

    onSave(model) {

        this.pendeciaPrioridadeService.save(model).subscribe((result) => {
            this.router.navigate(["/pendeciaprioridade"])
        });
    }

}
