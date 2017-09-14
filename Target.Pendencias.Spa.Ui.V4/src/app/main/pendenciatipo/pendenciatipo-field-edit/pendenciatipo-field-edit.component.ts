import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { PendenciaTipoService } from '../pendenciatipo.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciatipo-field-edit',
    templateUrl: './pendenciatipo-field-edit.component.html',
    styleUrls: ['./pendenciatipo-field-edit.component.css']
})
export class PendenciaTipoFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private pendenciaTipoService: PendenciaTipoService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
