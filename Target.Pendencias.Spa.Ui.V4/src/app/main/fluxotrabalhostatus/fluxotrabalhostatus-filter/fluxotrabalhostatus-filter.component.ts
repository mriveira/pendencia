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


    public onChange_makeSelect_modelFilter_fluxoTrabalhoTipoId(eventArgs) {

        this.vm.modelFilter.fluxoTrabalhoTipoId = eventArgs;
    }

}
