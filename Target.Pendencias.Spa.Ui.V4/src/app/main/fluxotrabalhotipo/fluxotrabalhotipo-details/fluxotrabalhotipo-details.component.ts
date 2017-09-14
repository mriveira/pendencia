import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { FluxoTrabalhoTipoService } from '../fluxotrabalhotipo.service';

@Component({
    selector: 'app-fluxotrabalhotipo-details',
    templateUrl: './fluxotrabalhotipo-details.component.html',
    styleUrls: ['./fluxotrabalhotipo-details.component.css'],
})
export class FluxoTrabalhoTipoDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private fluxoTrabalhoTipoService: FluxoTrabalhoTipoService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.fluxoTrabalhoTipoService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		if (this.id) {
			this.fluxoTrabalhoTipoService.get({ id: this.id }).subscribe((data) => {
				this.vm.details = data.data;
			})
		};

    }

    
}
