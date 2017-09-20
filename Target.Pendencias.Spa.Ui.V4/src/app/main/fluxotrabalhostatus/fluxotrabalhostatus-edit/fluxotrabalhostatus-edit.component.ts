import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';
import { GlobalService, NotificationParameters} from '../../../global.service';

@Component({
    selector: 'app-fluxotrabalhostatus-edit',
    templateUrl: './fluxotrabalhostatus-edit.component.html',
    styleUrls: ['./fluxotrabalhostatus-edit.component.css'],
})
export class FluxoTrabalhoStatusEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

		 this.vm = null;

    }

    ngOnInit() {

		this.vm = this.fluxoTrabalhoStatusService.initVM();
		this.fluxoTrabalhoStatusService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.fluxoTrabalhoStatusService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
			GlobalService.getNotificationEmitter().emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    onSave(model) {

        this.fluxoTrabalhoStatusService.save(model).subscribe((result) => {
            this.router.navigate(["/fluxotrabalhostatus"])
        });
    }

}
