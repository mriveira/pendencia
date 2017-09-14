import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { FluxoTrabalhoTipoService } from '../fluxotrabalhotipo.service';

@Component({
    selector: 'app-fluxotrabalhotipo-container-create',
    templateUrl: './fluxotrabalhotipo-container-create.component.html',
    styleUrls: ['./fluxotrabalhotipo-container-create.component.css'],
})
export class FluxoTrabalhoTipoContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private fluxoTrabalhoTipoService: FluxoTrabalhoTipoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.fluxoTrabalhoTipoService.initVM();
    }

    ngOnInit() {

       
    }

}
