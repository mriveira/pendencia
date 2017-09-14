import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { UsuarioService } from '../usuario.service';

@Component({
    selector: 'app-usuario-details',
    templateUrl: './usuario-details.component.html',
    styleUrls: ['./usuario-details.component.css'],
})
export class UsuarioDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.usuarioService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		if (this.id) {
			this.usuarioService.get({ id: this.id }).subscribe((data) => {
				this.vm.details = data.data;
			})
		};

    }

    
}
