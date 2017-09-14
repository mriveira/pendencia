import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ComentarioService } from '../comentario.service';

@Component({
    selector: 'app-comentario-details',
    templateUrl: './comentario-details.component.html',
    styleUrls: ['./comentario-details.component.css'],
})
export class ComentarioDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private comentarioService: ComentarioService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.comentarioService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		if (this.id) {
			this.comentarioService.get({ id: this.id }).subscribe((data) => {
				this.vm.details = data.data;
			})
		};

    }

    
}
