import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';

@Component({
    selector: 'app-projetofluxotrabalhostatus-create',
    templateUrl: './projetofluxotrabalhostatus-create.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-create.component.css'],
})
export class ProjetoFluxoTrabalhoStatusCreateComponent implements OnInit {

    vm: ViewModel;
    id: number;
    private sub: any;

    constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.projetoFluxoTrabalhoStatusService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.projetoFluxoTrabalhoStatusService.save(model).subscribe((result) => {
            this.router.navigate(["/projetofluxotrabalhostatus"])
        });
    }

}
