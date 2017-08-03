import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-field-edit',
    templateUrl: './cliente-field-edit.component.html',
    styleUrls: ['./cliente-field-edit.component.css']
})
export class ClienteFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private clienteService: ClienteService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
