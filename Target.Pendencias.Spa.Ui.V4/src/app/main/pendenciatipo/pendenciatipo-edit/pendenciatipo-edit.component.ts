import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaTipoService } from '../pendenciatipo.service';
import { GlobalService, NotificationParameters} from '../../../global.service';

@Component({
    selector: 'app-pendenciatipo-edit',
    templateUrl: './pendenciatipo-edit.component.html',
    styleUrls: ['./pendenciatipo-edit.component.css'],
})
export class PendenciaTipoEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendenciaTipoService: PendenciaTipoService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

		 this.vm = null;

    }

    ngOnInit() {

		this.vm = this.pendenciaTipoService.initVM();
		this.pendenciaTipoService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.pendenciaTipoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
			GlobalService.getNotificationEmitter().emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    onSave(model) {

        this.pendenciaTipoService.save(model).subscribe((result) => {
            this.router.navigate(["/pendenciatipo"])
        });
    }

}
