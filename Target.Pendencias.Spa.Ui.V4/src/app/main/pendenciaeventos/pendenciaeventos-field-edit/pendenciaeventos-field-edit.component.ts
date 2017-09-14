import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { PendenciaEventosService } from '../pendenciaeventos.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciaeventos-field-edit',
    templateUrl: './pendenciaeventos-field-edit.component.html',
    styleUrls: ['./pendenciaeventos-field-edit.component.css']
})
export class PendenciaEventosFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private pendenciaEventosService: PendenciaEventosService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
