import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaEventosService } from '../pendenciaeventos.service';

@Component({
    selector: 'app-pendenciaeventos-create',
    templateUrl: './pendenciaeventos-create.component.html',
    styleUrls: ['./pendenciaeventos-create.component.css'],
})
export class PendenciaEventosCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
 
    constructor(private pendenciaEventosService: PendenciaEventosService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaEventosService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.pendenciaEventosService.save(model).subscribe((result) => {
            this.router.navigate(["/pendenciaeventos"])
        });
    }

}
