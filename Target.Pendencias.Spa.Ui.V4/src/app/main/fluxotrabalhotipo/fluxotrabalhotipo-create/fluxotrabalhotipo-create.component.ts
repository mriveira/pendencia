import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { FluxoTrabalhoTipoService } from '../fluxotrabalhotipo.service';

@Component({
    selector: 'app-fluxotrabalhotipo-create',
    templateUrl: './fluxotrabalhotipo-create.component.html',
    styleUrls: ['./fluxotrabalhotipo-create.component.css'],
})
export class FluxoTrabalhoTipoCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
 
    constructor(private fluxoTrabalhoTipoService: FluxoTrabalhoTipoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.fluxoTrabalhoTipoService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.fluxoTrabalhoTipoService.save(model).subscribe((result) => {
            this.router.navigate(["/fluxotrabalhotipo"])
        });
    }

}
