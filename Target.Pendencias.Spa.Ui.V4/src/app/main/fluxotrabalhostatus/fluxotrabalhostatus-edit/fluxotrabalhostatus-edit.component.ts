import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';

@Component({
    selector: 'app-fluxotrabalhostatus-edit',
    templateUrl: './fluxotrabalhostatus-edit.component.html',
    styleUrls: ['./fluxotrabalhostatus-edit.component.css'],
})
export class FluxoTrabalhoStatusEditComponent implements OnInit {

    vm: ViewModel;
    id: number;
    private sub: any;

    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.fluxoTrabalhoStatusService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.fluxoTrabalhoStatusService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.fluxoTrabalhoStatusService.save(model).subscribe((result) => {
            this.router.navigate(["/fluxotrabalhostatus"])
        });
    }

}
