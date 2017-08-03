import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { ComentarioDocumentoService } from '../comentariodocumento.service';

@Component({
    selector: 'app-comentariodocumento-field-create',
    templateUrl: './comentariodocumento-field-create.component.html',
    styleUrls: ['./comentariodocumento-field-create.component.css']
})
export class ComentarioDocumentoFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private comentarioDocumentoService: ComentarioDocumentoService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

   


}
