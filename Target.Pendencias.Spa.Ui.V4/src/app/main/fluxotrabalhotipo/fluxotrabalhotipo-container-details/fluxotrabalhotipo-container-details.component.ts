import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { FluxoTrabalhoTipoService } from '../fluxotrabalhotipo.service';

@Component({
    selector: 'app-fluxotrabalhotipo-container-details',
    templateUrl: './fluxotrabalhotipo-container-details.component.html',
    styleUrls: ['./fluxotrabalhotipo-container-details.component.css'],
})
export class FluxoTrabalhoTipoContainerDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private fluxoTrabalhoTipoService: FluxoTrabalhoTipoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.fluxoTrabalhoTipoService.initVM();
    }

    ngOnInit() {

       
    }

}
