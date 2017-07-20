import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-comentario-filter',
    templateUrl: './comentario-filter.component.html',
    styleUrls: ['./comentario-filter.component.css']
})
export class ComentarioFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChange_makeSelect_modelFilter_fluxoTrabalhoTipoId(eventArgs) {

        this.vm.modelFilter.fluxoTrabalhoTipoId = eventArgs;
    }

}
