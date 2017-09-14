import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../pendencia.service';

@Component({
    selector: 'app-pendencia-details',
    templateUrl: './pendencia-details.component.html',
    styleUrls: ['./pendencia-details.component.css'],
})
export class PendenciaDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendenciaService: PendenciaService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.pendenciaService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		if (this.id) {
			this.pendenciaService.get({ id: this.id }).subscribe((data) => {
				this.vm.details = data.data;
			})
		};

    }

    
}
