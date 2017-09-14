import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { DocumentoService } from '../documento.service';

@Component({
    selector: 'app-documento-details',
    templateUrl: './documento-details.component.html',
    styleUrls: ['./documento-details.component.css'],
})
export class DocumentoDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private documentoService: DocumentoService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.documentoService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		if (this.id) {
			this.documentoService.get({ id: this.id }).subscribe((data) => {
				this.vm.details = data.data;
			})
		};

    }

    
}
