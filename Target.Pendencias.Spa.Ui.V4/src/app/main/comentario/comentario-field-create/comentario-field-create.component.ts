import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { ComentarioService } from '../comentario.service';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-comentario-field-create',
    templateUrl: './comentario-field-create.component.html',
    styleUrls: ['./comentario-field-create.component.css']
})
export class ComentarioFieldCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;


   constructor(private comentarioService: ComentarioService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

   


}
