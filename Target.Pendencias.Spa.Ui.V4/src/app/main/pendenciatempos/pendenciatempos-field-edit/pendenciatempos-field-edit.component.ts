import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { PendenciaTemposService } from '../pendenciatempos.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciatempos-field-edit',
    templateUrl: './pendenciatempos-field-edit.component.html',
    styleUrls: ['./pendenciatempos-field-edit.component.css']
})
export class PendenciaTemposFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private pendenciaTemposService: PendenciaTemposService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
