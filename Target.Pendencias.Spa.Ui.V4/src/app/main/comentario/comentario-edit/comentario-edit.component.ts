import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ComentarioService } from '../comentario.service';
import { GlobalService, NotificationParameters} from '../../../global.service';

@Component({
    selector: 'app-comentario-edit',
    templateUrl: './comentario-edit.component.html',
    styleUrls: ['./comentario-edit.component.css'],
})
export class ComentarioEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private comentarioService: ComentarioService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

		 this.vm = null;

    }

    ngOnInit() {

		this.vm = this.comentarioService.initVM();
		this.comentarioService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.comentarioService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
			GlobalService.notification.emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    onSave(model) {

        this.comentarioService.save(model).subscribe((result) => {
            this.router.navigate(["/comentario"])
        });
    }

}
