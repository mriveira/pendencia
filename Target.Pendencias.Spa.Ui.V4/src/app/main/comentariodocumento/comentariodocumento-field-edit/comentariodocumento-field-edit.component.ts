import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { ComentarioDocumentoService } from '../comentariodocumento.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-comentariodocumento-field-edit',
    templateUrl: './comentariodocumento-field-edit.component.html',
    styleUrls: ['./comentariodocumento-field-edit.component.css']
})
export class ComentarioDocumentoFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private comentarioDocumentoService: ComentarioDocumentoService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
