import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ComentarioDocumentoService } from '../comentariodocumento.service';

@Component({
    selector: 'app-comentariodocumento-create',
    templateUrl: './comentariodocumento-create.component.html',
    styleUrls: ['./comentariodocumento-create.component.css'],
})
export class ComentarioDocumentoCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
 
    constructor(private comentarioDocumentoService: ComentarioDocumentoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.comentarioDocumentoService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.comentarioDocumentoService.save(model).subscribe((result) => {
            this.router.navigate(["/comentariodocumento"])
        });
    }

}
