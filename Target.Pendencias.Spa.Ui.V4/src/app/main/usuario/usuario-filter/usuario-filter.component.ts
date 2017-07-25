import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-usuario-filter',
    templateUrl: './usuario-filter.component.html',
    styleUrls: ['./usuario-filter.component.css']
})
export class UsuarioFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.modelFilter.usuarioId = eventArgs;
	}
public onChangeMakeSelectnome(eventArgs) {
        this.vm.modelFilter.nome = eventArgs;
	}
public onChangeMakeSelectfoto(eventArgs) {
        this.vm.modelFilter.foto = eventArgs;
	}
public onChangeMakeSelectemail(eventArgs) {
        this.vm.modelFilter.email = eventArgs;
	}
public onChangeMakeSelectsenha(eventArgs) {
        this.vm.modelFilter.senha = eventArgs;
	}
public onChangeMakeSelectusuarioTipoId(eventArgs) {
        this.vm.modelFilter.usuarioTipoId = eventArgs;
	}
public onChangeMakeSelectativo(eventArgs) {
        this.vm.modelFilter.ativo = eventArgs;
	}

}
