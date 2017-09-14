import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';

@Component({
    selector: 'app-projetofluxotrabalhostatus-details',
    templateUrl: './projetofluxotrabalhostatus-details.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-details.component.css'],
})
export class ProjetoFluxoTrabalhoStatusDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.projetoFluxoTrabalhoStatusService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		if (this.id) {
			this.projetoFluxoTrabalhoStatusService.get({ id: this.id }).subscribe((data) => {
				this.vm.details = data.data;
			})
		};

    }

    
}
