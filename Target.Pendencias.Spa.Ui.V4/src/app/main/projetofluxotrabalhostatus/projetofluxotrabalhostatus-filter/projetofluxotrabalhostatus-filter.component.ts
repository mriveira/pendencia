import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-projetofluxotrabalhostatus-filter',
    templateUrl: './projetofluxotrabalhostatus-filter.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-filter.component.css']
})
export class ProjetoFluxoTrabalhoStatusFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChangeMakeSelectprojetoId(eventArgs) {
        this.vm.modelFilter.projetoId = eventArgs;
	}
public onChangeMakeSelectfluxoTrabalhoStatusId(eventArgs) {
        this.vm.modelFilter.fluxoTrabalhoStatusId = eventArgs;
	}

}
