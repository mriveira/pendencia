import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-fluxotrabalhotipo-field-filter',
    templateUrl: './fluxotrabalhotipo-field-filter.component.html',
    styleUrls: ['./fluxotrabalhotipo-field-filter.component.css']
})
export class FluxoTrabalhoTipoFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
