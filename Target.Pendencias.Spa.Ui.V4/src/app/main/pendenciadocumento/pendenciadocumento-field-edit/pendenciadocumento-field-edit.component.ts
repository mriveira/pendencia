import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { PendenciaDocumentoService } from '../pendenciadocumento.service';

@Component({
    selector: 'app-pendenciadocumento-field-edit',
    templateUrl: './pendenciadocumento-field-edit.component.html',
    styleUrls: ['./pendenciadocumento-field-edit.component.css']
})
export class PendenciaDocumentoFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private pendenciaDocumentoService: PendenciaDocumentoService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
