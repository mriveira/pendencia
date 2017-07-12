import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-fluxo-trabalho-status-field',
    templateUrl: './fluxo-trabalho-status-field.component.html',
    styleUrls: ['./fluxo-trabalho-status-field.component.css']
})
export class FluxoTrabalhoStatusFieldComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

    public onChange_makeSelect_model_fluxoTrabalhoTipoId(eventArgs) {
        this.vm.model.fluxoTrabalhoTipoId = eventArgs;
    }

}
