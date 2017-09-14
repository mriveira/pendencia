import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { ComentarioService } from '../comentario.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-comentario-field-edit',
    templateUrl: './comentario-field-edit.component.html',
    styleUrls: ['./comentario-field-edit.component.css']
})
export class ComentarioFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private comentarioService: ComentarioService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
