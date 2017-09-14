import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { DocumentoService } from '../documento.service';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-documento-field-create',
    templateUrl: './documento-field-create.component.html',
    styleUrls: ['./documento-field-create.component.css']
})
export class DocumentoFieldCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;


   constructor(private documentoService: DocumentoService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

   


}
