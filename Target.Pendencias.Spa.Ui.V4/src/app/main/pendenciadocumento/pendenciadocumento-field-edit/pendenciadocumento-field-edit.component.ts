import { Component, OnInit, Input } from '@angular/core';
import { PendenciaDocumentoService } from '../pendenciadocumento.service';

@Component({
    selector: 'app-pendenciadocumento-field-edit',
    templateUrl: './pendenciadocumento-field-edit.component.html',
    styleUrls: ['./pendenciadocumento-field-edit.component.css']
})
export class PendenciaDocumentoFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private pendenciaDocumentoService: PendenciaDocumentoService) { }

    ngOnInit() {
        this.pendenciaDocumentoService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
        this.pendenciaDocumentoService.isValid(this.vm);
	}
	public onChangeMakeSelectdocumentoId(eventArgs) {
        this.vm.model.documentoId = eventArgs;
        this.pendenciaDocumentoService.isValid(this.vm);
	}


	public isValid(vm) {
        this.pendenciaDocumentoService.isValid(this.vm);
    }
   
}
