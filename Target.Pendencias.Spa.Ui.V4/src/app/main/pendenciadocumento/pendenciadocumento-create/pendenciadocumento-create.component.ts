import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaDocumentoService } from '../pendenciadocumento.service';

@Component({
    selector: 'app-pendenciadocumento-create',
    templateUrl: './pendenciadocumento-create.component.html',
    styleUrls: ['./pendenciadocumento-create.component.css'],
})
export class PendenciaDocumentoCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
 
    constructor(private pendenciaDocumentoService: PendenciaDocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.pendenciaDocumentoService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.pendenciaDocumentoService.save(model).subscribe((result) => {
            this.router.navigate(["/pendenciadocumento"])
        });
    }

}
