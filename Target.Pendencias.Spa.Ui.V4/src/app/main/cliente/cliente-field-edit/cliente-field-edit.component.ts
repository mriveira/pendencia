import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { ClienteService } from '../cliente.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-cliente-field-edit',
    templateUrl: './cliente-field-edit.component.html',
    styleUrls: ['./cliente-field-edit.component.css']
})
export class ClienteFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private clienteService: ClienteService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
