import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-usuariotipo-filter',
    templateUrl: './usuariotipo-filter.component.html',
    styleUrls: ['./usuariotipo-filter.component.css']
})
export class UsuarioTipoFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChangeMakeSelectusuarioTipoId(eventArgs) {
        this.vm.modelFilter.usuarioTipoId = eventArgs;
	}
public onChangeMakeSelectnome(eventArgs) {
        this.vm.modelFilter.nome = eventArgs;
	}

}
