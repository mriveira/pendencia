import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';

@Component({
    selector: 'app-fluxotrabalhostatus-create',
    templateUrl: './fluxotrabalhostatus-create.component.html',
    styleUrls: ['./fluxotrabalhostatus-create.component.css'],
})
export class FluxoTrabalhoStatusCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
 
    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.fluxoTrabalhoStatusService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.fluxoTrabalhoStatusService.save(model).subscribe((result) => {
            this.router.navigate(["/fluxotrabalhostatus"])
        });
    }

}
