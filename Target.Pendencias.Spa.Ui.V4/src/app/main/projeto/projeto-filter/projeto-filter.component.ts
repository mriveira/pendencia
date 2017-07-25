import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-projeto-filter',
    templateUrl: './projeto-filter.component.html',
    styleUrls: ['./projeto-filter.component.css']
})
export class ProjetoFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChangeMakeSelectprojetoId(eventArgs) {
        this.vm.modelFilter.projetoId = eventArgs;
	}
public onChangeMakeSelectnome(eventArgs) {
        this.vm.modelFilter.nome = eventArgs;
	}
public onChangeMakeSelectdescricao(eventArgs) {
        this.vm.modelFilter.descricao = eventArgs;
	}
public onChangeMakeSelectvisao(eventArgs) {
        this.vm.modelFilter.visao = eventArgs;
	}
public onChangeMakeSelectclienteId(eventArgs) {
        this.vm.modelFilter.clienteId = eventArgs;
	}
public onChangeMakeSelectchaveUnica(eventArgs) {
        this.vm.modelFilter.chaveUnica = eventArgs;
	}
public onChangeMakeSelectinicio(eventArgs) {
        this.vm.modelFilter.inicio = eventArgs;
	}
public onChangeMakeSelectfim(eventArgs) {
        this.vm.modelFilter.fim = eventArgs;
	}

}
