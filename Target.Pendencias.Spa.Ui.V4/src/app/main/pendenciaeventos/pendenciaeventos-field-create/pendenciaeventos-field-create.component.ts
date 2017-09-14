import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { PendenciaEventosService } from '../pendenciaeventos.service';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciaeventos-field-create',
    templateUrl: './pendenciaeventos-field-create.component.html',
    styleUrls: ['./pendenciaeventos-field-create.component.css']
})
export class PendenciaEventosFieldCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;


   constructor(private pendenciaEventosService: PendenciaEventosService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

   


}
