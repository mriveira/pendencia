import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { UsuarioTipoService } from '../usuariotipo.service';
import { GlobalService, NotificationParameters} from '../../../global.service';

@Component({
    selector: 'app-usuariotipo-edit',
    templateUrl: './usuariotipo-edit.component.html',
    styleUrls: ['./usuariotipo-edit.component.css'],
})
export class UsuarioTipoEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private usuarioTipoService: UsuarioTipoService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

		 this.vm = null;

    }

    ngOnInit() {

		this.vm = this.usuarioTipoService.initVM();
		this.usuarioTipoService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.usuarioTipoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
			GlobalService.getNotificationEmitter().emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    onSave(model) {

        this.usuarioTipoService.save(model).subscribe((result) => {
            this.router.navigate(["/usuariotipo"])
        });
    }

}
