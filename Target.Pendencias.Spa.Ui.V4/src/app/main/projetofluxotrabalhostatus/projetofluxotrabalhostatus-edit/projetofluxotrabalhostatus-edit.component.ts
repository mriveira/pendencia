import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';
import { GlobalService, NotificationParameters} from '../../../global.service';

@Component({
    selector: 'app-projetofluxotrabalhostatus-edit',
    templateUrl: './projetofluxotrabalhostatus-edit.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-edit.component.css'],
})
export class ProjetoFluxoTrabalhoStatusEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

		 this.vm = null;

    }

    ngOnInit() {

		this.vm = this.projetoFluxoTrabalhoStatusService.initVM();
		this.projetoFluxoTrabalhoStatusService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.projetoFluxoTrabalhoStatusService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
			GlobalService.getNotificationEmitter().emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    onSave(model) {

        this.projetoFluxoTrabalhoStatusService.save(model).subscribe((result) => {
            this.router.navigate(["/projetofluxotrabalhostatus"])
        });
    }

}
