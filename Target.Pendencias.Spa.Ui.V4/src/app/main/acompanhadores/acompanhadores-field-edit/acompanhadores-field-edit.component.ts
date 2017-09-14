import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { AcompanhadoresService } from '../acompanhadores.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-acompanhadores-field-edit',
    templateUrl: './acompanhadores-field-edit.component.html',
    styleUrls: ['./acompanhadores-field-edit.component.css']
})
export class AcompanhadoresFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private acompanhadoresService: AcompanhadoresService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
