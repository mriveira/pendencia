import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ComentarioDocumentoService } from '../comentariodocumento.service';
import { GlobalService, NotificationParameters} from '../../../global.service';

@Component({
    selector: 'app-comentariodocumento-edit',
    templateUrl: './comentariodocumento-edit.component.html',
    styleUrls: ['./comentariodocumento-edit.component.css'],
})
export class ComentarioDocumentoEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private comentarioDocumentoService: ComentarioDocumentoService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

		 this.vm = null;

    }

    ngOnInit() {

		this.vm = this.comentarioDocumentoService.initVM();
		this.comentarioDocumentoService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.comentarioDocumentoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
			GlobalService.notification.emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    onSave(model) {

        this.comentarioDocumentoService.save(model).subscribe((result) => {
            this.router.navigate(["/comentariodocumento"])
        });
    }

}
