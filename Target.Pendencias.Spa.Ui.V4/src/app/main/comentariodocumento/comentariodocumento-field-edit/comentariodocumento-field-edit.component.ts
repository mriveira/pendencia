import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ComentarioDocumentoService } from '../comentariodocumento.service';

@Component({
    selector: 'app-comentariodocumento-field-edit',
    templateUrl: './comentariodocumento-field-edit.component.html',
    styleUrls: ['./comentariodocumento-field-edit.component.css']
})
export class ComentarioDocumentoFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private comentarioDocumentoService: ComentarioDocumentoService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectdocumentoId(eventArgs) {
        this.vm.model.documentoId = eventArgs;
	}
	public onChangeMakeSelectcomentarioId(eventArgs) {
        this.vm.model.comentarioId = eventArgs;
	}

   
}
