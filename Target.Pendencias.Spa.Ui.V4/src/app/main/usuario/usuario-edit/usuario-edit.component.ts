import { Component, OnInit, Input, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { UsuarioService } from '../usuario.service';
import { GlobalService, NotificationParameters} from '../../../global.service';

@Component({
    selector: 'app-usuario-edit',
    templateUrl: './usuario-edit.component.html',
    styleUrls: ['./usuario-edit.component.css'],
})
export class UsuarioEditComponent implements OnInit, AfterViewInit{

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

		 this.vm = null;

    }

   

    ngOnInit() {

		this.vm = this.usuarioService.initVM();
		this.usuarioService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        setTimeout(() => {
            this.usuarioService.get({ id: this.id }).subscribe((data) => {
                this.vm.model = data.data;
                GlobalService.notification.emit(new NotificationParameters("edit", {
                    model: this.vm.model
                }));
            })
        }, 250);

    }

     ngAfterViewInit() {
        
    }

    onSave(model) {

        this.usuarioService.save(model).subscribe((result) => {
            this.router.navigate(["/usuario"])
        });
    }

}
