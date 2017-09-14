import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { FluxoTrabalhoTipoService } from '../fluxotrabalhotipo.service';

@Component({
    selector: 'app-fluxotrabalhotipo-container-filter',
    templateUrl: './fluxotrabalhotipo-container-filter.component.html',
    styleUrls: ['./fluxotrabalhotipo-container-filter.component.css'],
})
export class FluxoTrabalhoTipoContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private fluxoTrabalhoTipoService: FluxoTrabalhoTipoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.fluxoTrabalhoTipoService.initVM();
    }

    ngOnInit() {

       
    }

}
