import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { DocumentoService } from '../documento.service';

@Component({
    selector: 'app-documento-create',
    templateUrl: './documento-create.component.html',
    styleUrls: ['./documento-create.component.css'],
})
export class DocumentoCreateComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private documentoService: DocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.documentoService.initVM();

        this.documentoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.documentoService.save(model).subscribe((result) => {
            this.router.navigate(["/documento"])
        });
    }

}
