import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projetofluxotrabalhostatus-field-edit',
    templateUrl: './projetofluxotrabalhostatus-field-edit.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-field-edit.component.css']
})
export class ProjetoFluxoTrabalhoStatusFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
