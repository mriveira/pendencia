import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { PendenciaDocumentoService } from '../pendenciadocumento.service';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciadocumento-field-create',
    templateUrl: './pendenciadocumento-field-create.component.html',
    styleUrls: ['./pendenciadocumento-field-create.component.css']
})
export class PendenciaDocumentoFieldCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;


   constructor(private pendenciaDocumentoService: PendenciaDocumentoService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

   


}
