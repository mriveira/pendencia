import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pendenciatipo-filter',
    templateUrl: './pendenciatipo-filter.component.html',
    styleUrls: ['./pendenciatipo-filter.component.css']
})
export class PendenciaTipoFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChange_makeSelect_modelFilter_fluxoTrabalhoTipoId(eventArgs) {

        this.vm.modelFilter.fluxoTrabalhoTipoId = eventArgs;
    }

}
