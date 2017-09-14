import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { PendenciaTemposService } from '../pendenciatempos.service';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciatempos-field-create',
    templateUrl: './pendenciatempos-field-create.component.html',
    styleUrls: ['./pendenciatempos-field-create.component.css']
})
export class PendenciaTemposFieldCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;


   constructor(private pendenciaTemposService: PendenciaTemposService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

   


}
