import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-comentario-filter',
    templateUrl: './comentario-filter.component.html',
    styleUrls: ['./comentario-filter.component.css']
})
export class ComentarioFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChangeMakeSelectdescricao(eventArgs) {
        this.vm.modelFilter.descricao = eventArgs;
	}
public onChangeMakeSelectdata(eventArgs) {
        this.vm.modelFilter.data = eventArgs;
	}
public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.modelFilter.usuarioId = eventArgs;
	}
public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.modelFilter.pendenciaId = eventArgs;
	}

}
