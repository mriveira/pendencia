import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';

@Component({
    selector: 'app-projetofluxotrabalhostatus-container-filter',
    templateUrl: './projetofluxotrabalhostatus-container-filter.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-container-filter.component.css'],
})
export class ProjetoFluxoTrabalhoStatusContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.projetoFluxoTrabalhoStatusService.initVM();
    }

    ngOnInit() {

       
    }

}
