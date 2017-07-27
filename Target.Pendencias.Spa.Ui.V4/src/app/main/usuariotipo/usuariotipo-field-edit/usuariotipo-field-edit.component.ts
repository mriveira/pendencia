import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { UsuarioTipoService } from '../usuariotipo.service';

@Component({
    selector: 'app-usuariotipo-field-edit',
    templateUrl: './usuariotipo-field-edit.component.html',
    styleUrls: ['./usuariotipo-field-edit.component.css']
})
export class UsuarioTipoFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private usuarioTipoService: UsuarioTipoService, private ref: ChangeDetectorRef) { }

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
	public onChangeMakeSelectnome(eventArgs) {
        this.vm.model.nome = eventArgs;
	}
   
}
