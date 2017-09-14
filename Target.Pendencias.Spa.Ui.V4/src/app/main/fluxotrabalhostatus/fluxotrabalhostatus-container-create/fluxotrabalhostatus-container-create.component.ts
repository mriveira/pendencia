import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';

@Component({
    selector: 'app-fluxotrabalhostatus-container-create',
    templateUrl: './fluxotrabalhostatus-container-create.component.html',
    styleUrls: ['./fluxotrabalhostatus-container-create.component.css'],
})
export class FluxoTrabalhoStatusContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.fluxoTrabalhoStatusService.initVM();
    }

    ngOnInit() {

       
    }

}
