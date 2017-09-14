import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendeciaPrioridadeService } from '../pendeciaprioridade.service';

@Component({
    selector: 'app-pendeciaprioridade-create',
    templateUrl: './pendeciaprioridade-create.component.html',
    styleUrls: ['./pendeciaprioridade-create.component.css'],
})
export class PendeciaPrioridadeCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
 
    constructor(private pendeciaPrioridadeService: PendeciaPrioridadeService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendeciaPrioridadeService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.pendeciaPrioridadeService.save(model).subscribe((result) => {
            this.router.navigate(["/pendeciaprioridade"])
        });
    }

}
