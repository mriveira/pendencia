import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { FluxoTrabalhoTipoService } from '../fluxotrabalhotipo.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-fluxotrabalhotipo-print',
    templateUrl: './fluxotrabalhotipo-print.component.html',
    styleUrls: ['./fluxotrabalhotipo-print.component.css'],
})
export class FluxoTrabalhoTipoPrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private fluxoTrabalhoTipoService: FluxoTrabalhoTipoService, private route: ActivatedRoute) {
		this.vm = null;
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.fluxoTrabalhoTipoService.initVM();

        this.fluxoTrabalhoTipoService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
