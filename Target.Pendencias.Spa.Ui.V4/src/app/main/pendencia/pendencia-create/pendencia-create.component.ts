import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../pendencia.service';

@Component({
    selector: 'app-pendencia-create',
    templateUrl: './pendencia-create.component.html',
    styleUrls: ['./pendencia-create.component.css'],
})
export class PendenciaCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
 
    constructor(private pendenciaService: PendenciaService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.pendenciaService.save(model).subscribe((result) => {
            this.router.navigate(["/pendencia"])
        });
    }

}
