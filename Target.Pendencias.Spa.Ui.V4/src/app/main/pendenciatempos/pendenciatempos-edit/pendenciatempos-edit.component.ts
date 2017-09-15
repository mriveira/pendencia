import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaTemposService } from '../pendenciatempos.service';
import { GlobalService, NotificationParameters} from '../../../global.service';

@Component({
    selector: 'app-pendenciatempos-edit',
    templateUrl: './pendenciatempos-edit.component.html',
    styleUrls: ['./pendenciatempos-edit.component.css'],
})
export class PendenciaTemposEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendenciaTemposService: PendenciaTemposService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

		 this.vm = null;

    }

    ngOnInit() {

		this.vm = this.pendenciaTemposService.initVM();
		this.pendenciaTemposService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.pendenciaTemposService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
			GlobalService.notification.emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    onSave(model) {

        this.pendenciaTemposService.save(model).subscribe((result) => {
            this.router.navigate(["/pendenciatempos"])
        });
    }

}
