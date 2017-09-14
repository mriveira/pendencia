import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';

@Component({
    selector: 'app-fluxotrabalhostatus-details',
    templateUrl: './fluxotrabalhostatus-details.component.html',
    styleUrls: ['./fluxotrabalhostatus-details.component.css'],
})
export class FluxoTrabalhoStatusDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.fluxoTrabalhoStatusService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		if (this.id) {
			this.fluxoTrabalhoStatusService.get({ id: this.id }).subscribe((data) => {
				this.vm.details = data.data;
			})
		};

    }

    
}
