import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pendeciaprioridade-filter',
    templateUrl: './pendeciaprioridade-filter.component.html',
    styleUrls: ['./pendeciaprioridade-filter.component.css']
})
export class PendeciaPrioridadeFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChange_makeSelect_modelFilter_fluxoTrabalhoTipoId(eventArgs) {

        this.vm.modelFilter.fluxoTrabalhoTipoId = eventArgs;
    }

}
