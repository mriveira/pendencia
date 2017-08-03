import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { DocumentoService } from '../documento.service';

@Component({
    selector: 'app-documento-create',
    templateUrl: './documento-create.component.html',
    styleUrls: ['./documento-create.component.css'],
})
export class DocumentoCreateComponent implements OnInit {

    vm: ViewModel;
    id: number;
    private sub: any;

    constructor(private documentoService: DocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.documentoService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.documentoService.save(model).subscribe((result) => {
            this.router.navigate(["/documento"])
        });
    }

}
