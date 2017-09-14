import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaTipoService } from '../pendenciatipo.service';

@Component({
    selector: 'app-pendenciatipo-details',
    templateUrl: './pendenciatipo-details.component.html',
    styleUrls: ['./pendenciatipo-details.component.css'],
})
export class PendenciaTipoDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendenciaTipoService: PendenciaTipoService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.pendenciaTipoService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		if (this.id) {
			this.pendenciaTipoService.get({ id: this.id }).subscribe((data) => {
				this.vm.details = data.data;
			})
		};

    }

    
}
