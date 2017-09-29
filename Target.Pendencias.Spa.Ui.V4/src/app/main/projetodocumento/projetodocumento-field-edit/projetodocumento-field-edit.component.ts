import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { ProjetoDocumentoService } from '../projetodocumento.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projetodocumento-field-edit',
    templateUrl: './projetodocumento-field-edit.component.html',
    styleUrls: ['./projetodocumento-field-edit.component.css']
})
export class ProjetoDocumentoFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private projetoDocumentoService: ProjetoDocumentoService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
