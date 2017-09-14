import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { UsuarioService } from '../usuario.service';
import { GlobalService, NotificationParameters } from '../../../global.service';

@Component({
    selector: 'app-usuario-edit',
    templateUrl: './usuario-edit.component.html',
    styleUrls: ['./usuario-edit.component.css'],
})
export class UsuarioEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.usuarioService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.usuarioService.get({ id: this.id }).subscribe((data) => {

            this.vm.model = data.data;
            setTimeout(() => {
                GlobalService.notification.emit(new NotificationParameters("edit", {
                    model: this.vm.model
                }));
            }, 250);

        })

    }

    onSave(model) {

        this.usuarioService.save(model).subscribe((result) => {
            this.router.navigate(["/usuario"])
        });
    }

}
