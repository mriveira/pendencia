import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-fluxotrabalhostatus-field-edit',
    templateUrl: './fluxotrabalhostatus-field-edit.component.html',
    styleUrls: ['./fluxotrabalhostatus-field-edit.component.css']
})
export class FluxoTrabalhoStatusFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
