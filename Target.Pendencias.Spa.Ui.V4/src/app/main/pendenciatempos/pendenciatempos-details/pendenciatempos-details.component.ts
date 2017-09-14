import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaTemposService } from '../pendenciatempos.service';

@Component({
    selector: 'app-pendenciatempos-details',
    templateUrl: './pendenciatempos-details.component.html',
    styleUrls: ['./pendenciatempos-details.component.css'],
})
export class PendenciaTemposDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendenciaTemposService: PendenciaTemposService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.pendenciaTemposService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		if (this.id) {
			this.pendenciaTemposService.get({ id: this.id }).subscribe((data) => {
				this.vm.details = data.data;
			})
		};

    }

    
}
