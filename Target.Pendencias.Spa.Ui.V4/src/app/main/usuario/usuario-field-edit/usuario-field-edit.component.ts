import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
    selector: 'app-usuario-field-edit',
    templateUrl: './usuario-field-edit.component.html',
    styleUrls: ['./usuario-field-edit.component.css']
})
export class UsuarioFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private usuarioService: UsuarioService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectusuarioTipoId(eventArgs) {
        this.vm.model.usuarioTipoId = eventArgs;
	}

   
}
