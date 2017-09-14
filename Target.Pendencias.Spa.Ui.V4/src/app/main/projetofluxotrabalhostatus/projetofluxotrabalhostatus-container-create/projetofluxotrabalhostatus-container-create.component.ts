import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';

@Component({
    selector: 'app-projetofluxotrabalhostatus-container-create',
    templateUrl: './projetofluxotrabalhostatus-container-create.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-container-create.component.css'],
})
export class ProjetoFluxoTrabalhoStatusContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.projetoFluxoTrabalhoStatusService.initVM();
    }

    ngOnInit() {

       
    }

}
