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


    public onChange_makeSelect_modelFilter_fluxoTrabalhoTipoId(eventArgs) {

        this.vm.modelFilter.fluxoTrabalhoTipoId = eventArgs;
    }

}
