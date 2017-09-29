import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoDocumentoService } from '../projetodocumento.service';

@Component({
    selector: 'app-projetodocumento-details',
    templateUrl: './projetodocumento-details.component.html',
    styleUrls: ['./projetodocumento-details.component.css'],
})
export class ProjetoDocumentoDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private projetoDocumentoService: ProjetoDocumentoService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.projetoDocumentoService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		if (this.id) {
			this.projetoDocumentoService.get({ id: this.id }).subscribe((data) => {
				this.vm.details = data.data;
			})
		};

    }

    
}
