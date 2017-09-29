import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { ProjetoDocumentoService } from '../projetodocumento.service';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projetodocumento-field-create',
    templateUrl: './projetodocumento-field-create.component.html',
    styleUrls: ['./projetodocumento-field-create.component.css']
})
export class ProjetoDocumentoFieldCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;


   constructor(private projetoDocumentoService: ProjetoDocumentoService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

   


}
