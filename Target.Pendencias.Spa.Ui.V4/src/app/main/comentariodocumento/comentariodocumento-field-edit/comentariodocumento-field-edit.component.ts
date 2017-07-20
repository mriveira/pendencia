import { Component, OnInit, Input } from '@angular/core';
import { ComentarioDocumentoService } from '../comentariodocumento.service';

@Component({
    selector: 'app-comentariodocumento-field-edit',
    templateUrl: './comentariodocumento-field-edit.component.html',
    styleUrls: ['./comentariodocumento-field-edit.component.css']
})
export class ComentarioDocumentoFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private comentarioDocumentoService: ComentarioDocumentoService) { }

    ngOnInit() {
        this.comentarioDocumentoService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectdocumentoId(eventArgs) {
        this.vm.model.documentoId = eventArgs;
        this.comentarioDocumentoService.isValid(this.vm);
	}
	public onChangeMakeSelectcomentarioId(eventArgs) {
        this.vm.model.comentarioId = eventArgs;
        this.comentarioDocumentoService.isValid(this.vm);
	}


	public isValid(vm) {
        this.comentarioDocumentoService.isValid(this.vm);
    }
   
}
