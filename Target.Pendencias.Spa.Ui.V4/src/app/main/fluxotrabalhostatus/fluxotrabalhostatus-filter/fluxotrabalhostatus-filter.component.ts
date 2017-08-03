import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-fluxotrabalhostatus-filter',
    templateUrl: './fluxotrabalhostatus-filter.component.html',
    styleUrls: ['./fluxotrabalhostatus-filter.component.css']
})
export class FluxoTrabalhoStatusFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChangeMakeSelectnome(eventArgs) {
        this.vm.modelFilter.nome = eventArgs;
	}
public onChangeMakeSelectfluxoTrabalhoTipoId(eventArgs) {
        this.vm.modelFilter.fluxoTrabalhoTipoId = eventArgs;
	}
public onChangeMakeSelectcorFundo(eventArgs) {
        this.vm.modelFilter.corFundo = eventArgs;
	}
public onChangeMakeSelectcorFonte(eventArgs) {
        this.vm.modelFilter.corFonte = eventArgs;
	}
public onChangeMakeSelectordem(eventArgs) {
        this.vm.modelFilter.ordem = eventArgs;
	}

}
