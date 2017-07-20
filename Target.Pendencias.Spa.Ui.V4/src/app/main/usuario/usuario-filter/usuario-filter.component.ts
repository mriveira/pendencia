import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-usuario-filter',
    templateUrl: './usuario-filter.component.html',
    styleUrls: ['./usuario-filter.component.css']
})
export class UsuarioFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChange_makeSelect_modelFilter_fluxoTrabalhoTipoId(eventArgs) {

        this.vm.modelFilter.fluxoTrabalhoTipoId = eventArgs;
    }

}
