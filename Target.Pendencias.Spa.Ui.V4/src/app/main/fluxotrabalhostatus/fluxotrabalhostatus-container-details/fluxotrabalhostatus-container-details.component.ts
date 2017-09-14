import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';

@Component({
    selector: 'app-fluxotrabalhostatus-container-details',
    templateUrl: './fluxotrabalhostatus-container-details.component.html',
    styleUrls: ['./fluxotrabalhostatus-container-details.component.css'],
})
export class FluxoTrabalhoStatusContainerDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.fluxoTrabalhoStatusService.initVM();
    }

    ngOnInit() {

       
    }

}
