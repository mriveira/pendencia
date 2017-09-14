import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { PendeciaPrioridadeService } from '../pendeciaprioridade.service';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendeciaprioridade-field-create',
    templateUrl: './pendeciaprioridade-field-create.component.html',
    styleUrls: ['./pendeciaprioridade-field-create.component.css']
})
export class PendeciaPrioridadeFieldCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;


   constructor(private pendeciaPrioridadeService: PendeciaPrioridadeService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

   


}
