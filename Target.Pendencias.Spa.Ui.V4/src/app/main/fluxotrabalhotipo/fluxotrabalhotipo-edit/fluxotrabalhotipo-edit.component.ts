import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { FluxoTrabalhoTipoService } from '../fluxotrabalhotipo.service';

@Component({
    selector: 'app-fluxotrabalhotipo-edit',
    templateUrl: './fluxotrabalhotipo-edit.component.html',
    styleUrls: ['./fluxotrabalhotipo-edit.component.css'],
})
export class FluxoTrabalhoTipoEditComponent implements OnInit {

    vm: any;
    id: number;
    private sub: any;

    constructor(private fluxoTrabalhoTipoService: FluxoTrabalhoTipoService, private route: ActivatedRoute, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.fluxoTrabalhoTipoService.initVM();

        this.fluxoTrabalhoTipoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.fluxoTrabalhoTipoService.save(model).subscribe((result) => {
            this.router.navigate(["/fluxotrabalhotipo"])
        });
    }

}
