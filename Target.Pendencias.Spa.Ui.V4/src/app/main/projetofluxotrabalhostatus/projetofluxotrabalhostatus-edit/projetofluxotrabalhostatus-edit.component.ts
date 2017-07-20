import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';

@Component({
    selector: 'app-projetofluxotrabalhostatus-edit',
    templateUrl: './projetofluxotrabalhostatus-edit.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-edit.component.css'],
})
export class ProjetoFluxoTrabalhoStatusEditComponent implements OnInit {

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
