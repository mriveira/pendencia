import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { FluxoTrabalhoTipoService } from '../fluxotrabalhotipo.service';
import { GlobalService, NotificationParameters} from '../../../global.service';

@Component({
    selector: 'app-fluxotrabalhotipo-edit',
    templateUrl: './fluxotrabalhotipo-edit.component.html',
    styleUrls: ['./fluxotrabalhotipo-edit.component.css'],
})
export class FluxoTrabalhoTipoEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private fluxoTrabalhoTipoService: FluxoTrabalhoTipoService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

		 this.vm = null;

    }

    ngOnInit() {

		this.vm = this.fluxoTrabalhoTipoService.initVM();
		this.fluxoTrabalhoTipoService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.fluxoTrabalhoTipoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
			GlobalService.notification.emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    onSave(model) {

        this.fluxoTrabalhoTipoService.save(model).subscribe((result) => {
            this.router.navigate(["/fluxotrabalhotipo"])
        });
    }

}
