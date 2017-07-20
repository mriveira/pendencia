import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-cliente-filter',
    templateUrl: './cliente-filter.component.html',
    styleUrls: ['./cliente-filter.component.css']
})
export class ClienteFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChange_makeSelect_modelFilter_fluxoTrabalhoTipoId(eventArgs) {

        this.vm.modelFilter.fluxoTrabalhoTipoId = eventArgs;
    }

}
