import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoService } from '../projeto.service';
import { GlobalService, NotificationParameters} from '../../../global.service';

@Component({
    selector: 'app-projeto-edit',
    templateUrl: './projeto-edit.component.html',
    styleUrls: ['./projeto-edit.component.css'],
})
export class ProjetoEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private projetoService: ProjetoService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

		 this.vm = null;

    }

    ngOnInit() {

		this.vm = this.projetoService.initVM();
		this.projetoService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.projetoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
			GlobalService.notification.emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    onSave(model) {

        this.projetoService.save(model).subscribe((result) => {
            this.router.navigate(["/projeto"])
        });
    }

}
