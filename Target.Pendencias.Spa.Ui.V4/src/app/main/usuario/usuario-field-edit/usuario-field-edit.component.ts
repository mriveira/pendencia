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
    
	public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.model.usuarioId = eventArgs;
	}
	public onChangeMakeSelectnome(eventArgs) {
        this.vm.model.nome = eventArgs;
	}
	public onChangeMakeSelectfoto(eventArgs) {
        this.vm.model.foto = eventArgs;
	}
	public onChangeMakeSelectemail(eventArgs) {
        this.vm.model.email = eventArgs;
	}
	public onChangeMakeSelectsenha(eventArgs) {
        this.vm.model.senha = eventArgs;
	}
	public onChangeMakeSelectusuarioTipoId(eventArgs) {
        this.vm.model.usuarioTipoId = eventArgs;
	}
	public onChangeMakeSelectativo(eventArgs) {
        this.vm.model.ativo = eventArgs;
	}
   
}
