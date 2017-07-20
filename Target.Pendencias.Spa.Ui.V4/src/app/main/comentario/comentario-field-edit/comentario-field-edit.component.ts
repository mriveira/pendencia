import { Component, OnInit, Input } from '@angular/core';
import { ComentarioService } from '../comentario.service';

@Component({
    selector: 'app-comentario-field-edit',
    templateUrl: './comentario-field-edit.component.html',
    styleUrls: ['./comentario-field-edit.component.css']
})
export class ComentarioFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private comentarioService: ComentarioService) { }

    ngOnInit() {
        this.comentarioService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.model.usuarioId = eventArgs;
        this.comentarioService.isValid(this.vm);
	}
	public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
        this.comentarioService.isValid(this.vm);
	}


	public isValid(vm) {
        this.comentarioService.isValid(this.vm);
    }
   
}
