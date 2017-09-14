import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projetofluxotrabalhostatus-field-filter',
    templateUrl: './projetofluxotrabalhostatus-field-filter.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-field-filter.component.css']
})
export class ProjetoFluxoTrabalhoStatusFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
