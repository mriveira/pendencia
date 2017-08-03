import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pendencia-filter',
    templateUrl: './pendencia-filter.component.html',
    styleUrls: ['./pendencia-filter.component.css']
})
export class PendenciaFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChangeMakeSelectprojetoId(eventArgs) {
        this.vm.modelFilter.projetoId = eventArgs;
	}
public onChangeMakeSelectresumo(eventArgs) {
        this.vm.modelFilter.resumo = eventArgs;
	}
public onChangeMakeSelectdescricao(eventArgs) {
        this.vm.modelFilter.descricao = eventArgs;
	}
public onChangeMakeSelectrequisitadoPor(eventArgs) {
        this.vm.modelFilter.requisitadoPor = eventArgs;
	}
public onChangeMakeSelecttempoEstimado(eventArgs) {
        this.vm.modelFilter.tempoEstimado = eventArgs;
	}
public onChangeMakeSelectpontosEstimados(eventArgs) {
        this.vm.modelFilter.pontosEstimados = eventArgs;
	}
public onChangeMakeSelectprazo(eventArgs) {
        this.vm.modelFilter.prazo = eventArgs;
	}
public onChangeMakeSelectpendenciaTipoId(eventArgs) {
        this.vm.modelFilter.pendenciaTipoId = eventArgs;
	}
public onChangeMakeSelectfluxoTrabalhoStatusId(eventArgs) {
        this.vm.modelFilter.fluxoTrabalhoStatusId = eventArgs;
	}
public onChangeMakeSelectpendenciaPrioridadeId(eventArgs) {
        this.vm.modelFilter.pendenciaPrioridadeId = eventArgs;
	}
public onChangeMakeSelecttags(eventArgs) {
        this.vm.modelFilter.tags = eventArgs;
	}

}
