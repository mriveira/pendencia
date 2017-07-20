import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';

@Component({
    selector: 'app-projetofluxotrabalhostatus-create',
    templateUrl: './projetofluxotrabalhostatus-create.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-create.component.css'],
})
export class ProjetoFluxoTrabalhoStatusCreateComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.projetoFluxoTrabalhoStatusService.initVM();

        this.projetoFluxoTrabalhoStatusService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.projetoFluxoTrabalhoStatusService.save(model).subscribe((result) => {
            this.router.navigate(["/projetofluxotrabalhostatus"])
        });
    }

}
