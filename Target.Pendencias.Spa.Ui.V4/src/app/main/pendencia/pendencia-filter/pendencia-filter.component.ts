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
public onChangeMakeSelectpendenciaTipoId(eventArgs) {
        this.vm.modelFilter.pendenciaTipoId = eventArgs;
	}
public onChangeMakeSelectfluxoTrabalhoStatusId(eventArgs) {
        this.vm.modelFilter.fluxoTrabalhoStatusId = eventArgs;
	}
public onChangeMakeSelectpendenciaPrioridadeId(eventArgs) {
        this.vm.modelFilter.pendenciaPrioridadeId = eventArgs;
	}

}
