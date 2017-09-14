import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';

@Component({
    selector: 'app-projetofluxotrabalhostatus-edit',
    templateUrl: './projetofluxotrabalhostatus-edit.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-edit.component.css'],
})
export class ProjetoFluxoTrabalhoStatusEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.projetoFluxoTrabalhoStatusService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });


        this.projetoFluxoTrabalhoStatusService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.projetoFluxoTrabalhoStatusService.save(model).subscribe((result) => {
            this.router.navigate(["/projetofluxotrabalhostatus"])
        });
    }

}
