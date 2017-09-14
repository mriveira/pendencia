import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-details',
    templateUrl: './cliente-details.component.html',
    styleUrls: ['./cliente-details.component.css'],
})
export class ClienteDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.clienteService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		if (this.id) {
			this.clienteService.get({ id: this.id }).subscribe((data) => {
				this.vm.details = data.data;
			})
		};

    }

    
}
