import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ClienteService } from '../cliente.service';
import { GlobalService, NotificationParameters} from '../../../global.service';

@Component({
    selector: 'app-cliente-edit',
    templateUrl: './cliente-edit.component.html',
    styleUrls: ['./cliente-edit.component.css'],
})
export class ClienteEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

		 this.vm = null;

    }

    ngOnInit() {

		this.vm = this.clienteService.initVM();
		this.clienteService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.clienteService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
			GlobalService.notification.emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    onSave(model) {

        this.clienteService.save(model).subscribe((result) => {
            this.router.navigate(["/cliente"])
        });
    }

}
