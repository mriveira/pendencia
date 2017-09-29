import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoDocumentoService } from '../projetodocumento.service';

@Component({
    selector: 'app-projetodocumento-create',
    templateUrl: './projetodocumento-create.component.html',
    styleUrls: ['./projetodocumento-create.component.css'],
})
export class ProjetoDocumentoCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
 
    constructor(private projetoDocumentoService: ProjetoDocumentoService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

        this.vm = this.projetoDocumentoService.initVM();
		this.projetoDocumentoService.detectChanges(this.ref);
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.projetoDocumentoService.save(model).subscribe((result) => {
            this.router.navigate(["/projetodocumento"])
        });
    }

}
