import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';

@Component({
    selector: 'app-fluxotrabalhostatus-create',
    templateUrl: './fluxotrabalhostatus-create.component.html',
    styleUrls: ['./fluxotrabalhostatus-create.component.css'],
})
export class FluxoTrabalhoStatusCreateComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.fluxoTrabalhoStatusService.initVM();

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
