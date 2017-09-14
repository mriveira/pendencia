import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendeciaPrioridadeService } from '../pendeciaprioridade.service';

@Component({
    selector: 'app-pendeciaprioridade-details',
    templateUrl: './pendeciaprioridade-details.component.html',
    styleUrls: ['./pendeciaprioridade-details.component.css'],
})
export class PendeciaPrioridadeDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendeciaPrioridadeService: PendeciaPrioridadeService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.pendeciaPrioridadeService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		if (this.id) {
			this.pendeciaPrioridadeService.get({ id: this.id }).subscribe((data) => {
				this.vm.details = data.data;
			})
		};

    }

    
}
