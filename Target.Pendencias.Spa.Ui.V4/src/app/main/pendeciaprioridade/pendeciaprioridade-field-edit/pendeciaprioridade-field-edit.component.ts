import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { PendeciaPrioridadeService } from '../pendeciaprioridade.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendeciaprioridade-field-edit',
    templateUrl: './pendeciaprioridade-field-edit.component.html',
    styleUrls: ['./pendeciaprioridade-field-edit.component.css']
})
export class PendeciaPrioridadeFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private pendeciaPrioridadeService: PendeciaPrioridadeService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
