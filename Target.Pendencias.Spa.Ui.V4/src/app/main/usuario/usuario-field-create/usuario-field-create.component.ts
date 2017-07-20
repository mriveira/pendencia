import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
    selector: 'app-usuario-field-create',
    templateUrl: './usuario-field-create.component.html',
    styleUrls: ['./usuario-field-create.component.css']
})
export class UsuarioFieldCreateComponent implements OnInit {

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
