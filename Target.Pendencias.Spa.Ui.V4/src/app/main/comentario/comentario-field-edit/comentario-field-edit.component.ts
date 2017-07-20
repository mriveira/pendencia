import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ComentarioService } from '../comentario.service';

@Component({
    selector: 'app-comentario-field-edit',
    templateUrl: './comentario-field-edit.component.html',
    styleUrls: ['./comentario-field-edit.component.css']
})
export class ComentarioFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private comentarioService: ComentarioService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.model.usuarioId = eventArgs;
	}
	public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
	}

   
}
