import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { PendenciaDocumentoService } from '../pendenciadocumento.service';

@Component({
    selector: 'app-pendenciadocumento-edit',
    templateUrl: './pendenciadocumento-edit.component.html',
    styleUrls: ['./pendenciadocumento-edit.component.css'],
})
export class PendenciaDocumentoEditComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private pendenciaDocumentoService: PendenciaDocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.pendenciaDocumentoService.initVM();

        this.pendenciaDocumentoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.pendenciaDocumentoService.save(model).subscribe((result) => {
            this.router.navigate(["/pendenciadocumento"])
        });
    }

}
