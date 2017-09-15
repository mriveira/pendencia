import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendeciaPrioridadeService } from '../pendeciaprioridade.service';
import { GlobalService, NotificationParameters} from '../../../global.service';

@Component({
    selector: 'app-pendeciaprioridade-edit',
    templateUrl: './pendeciaprioridade-edit.component.html',
    styleUrls: ['./pendeciaprioridade-edit.component.css'],
})
export class PendeciaPrioridadeEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendeciaPrioridadeService: PendeciaPrioridadeService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

		 this.vm = null;

    }

    ngOnInit() {

		this.vm = this.pendeciaPrioridadeService.initVM();
		this.pendeciaPrioridadeService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.pendeciaPrioridadeService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
			GlobalService.notification.emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    onSave(model) {

        this.pendeciaPrioridadeService.save(model).subscribe((result) => {
            this.router.navigate(["/pendeciaprioridade"])
        });
    }

}
