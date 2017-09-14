import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaTemposService } from '../pendenciatempos.service';

@Component({
    selector: 'app-pendenciatempos-create',
    templateUrl: './pendenciatempos-create.component.html',
    styleUrls: ['./pendenciatempos-create.component.css'],
})
export class PendenciaTemposCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
 
    constructor(private pendenciaTemposService: PendenciaTemposService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaTemposService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.pendenciaTemposService.save(model).subscribe((result) => {
            this.router.navigate(["/pendenciatempos"])
        });
    }

}
