import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';

@Component({
    selector: 'app-projetofluxotrabalhostatus-container-edit',
    templateUrl: './projetofluxotrabalhostatus-container-edit.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-container-edit.component.css'],
})
export class ProjetoFluxoTrabalhoStatusContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.projetoFluxoTrabalhoStatusService.initVM();
    }

    ngOnInit() {

       
    }

}
