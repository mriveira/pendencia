import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { ClienteService } from '../cliente.service';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-cliente-field-create',
    templateUrl: './cliente-field-create.component.html',
    styleUrls: ['./cliente-field-create.component.css']
})
export class ClienteFieldCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;


   constructor(private clienteService: ClienteService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

   


}
