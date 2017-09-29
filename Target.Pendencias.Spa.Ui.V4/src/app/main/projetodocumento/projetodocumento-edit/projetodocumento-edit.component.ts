import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoDocumentoService } from '../projetodocumento.service';
import { GlobalService, NotificationParameters} from '../../../global.service';

@Component({
    selector: 'app-projetodocumento-edit',
    templateUrl: './projetodocumento-edit.component.html',
    styleUrls: ['./projetodocumento-edit.component.css'],
})
export class ProjetoDocumentoEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private projetoDocumentoService: ProjetoDocumentoService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

		 this.vm = null;

    }

    ngOnInit() {

		this.vm = this.projetoDocumentoService.initVM();
		this.projetoDocumentoService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		setTimeout(() => {
        this.projetoDocumentoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
			GlobalService.getNotificationEmitter().emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })}, 250);

    }

    onSave(model) {

        this.projetoDocumentoService.save(model).subscribe((result) => {
            this.router.navigate(["/projetodocumento"])
        });
    }

}
