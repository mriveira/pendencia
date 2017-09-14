import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ComentarioService } from '../comentario.service';

@Component({
    selector: 'app-comentario-create',
    templateUrl: './comentario-create.component.html',
    styleUrls: ['./comentario-create.component.css'],
})
export class ComentarioCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
 
    constructor(private comentarioService: ComentarioService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.comentarioService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.comentarioService.save(model).subscribe((result) => {
            this.router.navigate(["/comentario"])
        });
    }

}
