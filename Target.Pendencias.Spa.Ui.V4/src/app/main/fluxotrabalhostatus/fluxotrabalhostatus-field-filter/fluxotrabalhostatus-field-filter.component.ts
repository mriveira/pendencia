import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-fluxotrabalhostatus-field-filter',
    templateUrl: './fluxotrabalhostatus-field-filter.component.html',
    styleUrls: ['./fluxotrabalhostatus-field-filter.component.css']
})
export class FluxoTrabalhoStatusFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
