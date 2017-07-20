import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-documento-filter',
    templateUrl: './documento-filter.component.html',
    styleUrls: ['./documento-filter.component.css']
})
export class DocumentoFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChange_makeSelect_modelFilter_fluxoTrabalhoTipoId(eventArgs) {

        this.vm.modelFilter.fluxoTrabalhoTipoId = eventArgs;
    }

}
