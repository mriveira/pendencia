import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { DocumentoService } from '../documento.service';

@Component({
    selector: 'app-documento-field-edit',
    templateUrl: './documento-field-edit.component.html',
    styleUrls: ['./documento-field-edit.component.css']
})
export class DocumentoFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private documentoService: DocumentoService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
