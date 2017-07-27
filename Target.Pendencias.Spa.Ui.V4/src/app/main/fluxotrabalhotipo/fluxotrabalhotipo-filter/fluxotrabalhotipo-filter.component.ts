import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-fluxotrabalhotipo-filter',
    templateUrl: './fluxotrabalhotipo-filter.component.html',
    styleUrls: ['./fluxotrabalhotipo-filter.component.css']
})
export class FluxoTrabalhoTipoFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChangeMakeSelectfluxoTrabalhoTipoId(eventArgs) {
        this.vm.modelFilter.fluxoTrabalhoTipoId = eventArgs;
	}
public onChangeMakeSelectnome(eventArgs) {
        this.vm.modelFilter.nome = eventArgs;
	}

}
