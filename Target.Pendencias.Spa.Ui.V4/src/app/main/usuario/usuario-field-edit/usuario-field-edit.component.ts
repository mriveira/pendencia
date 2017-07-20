import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
    selector: 'app-usuario-field-edit',
    templateUrl: './usuario-field-edit.component.html',
    styleUrls: ['./usuario-field-edit.component.css']
})
export class UsuarioFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private usuarioService: UsuarioService) { }

    ngOnInit() {
        this.usuarioService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectusuarioTipoId(eventArgs) {
        this.vm.model.usuarioTipoId = eventArgs;
        this.usuarioService.isValid(this.vm);
	}


	public isValid(vm) {
        this.usuarioService.isValid(this.vm);
    }
   
}
