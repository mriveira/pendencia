import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciaeventos-field-filter',
    templateUrl: './pendenciaeventos-field-filter.component.html',
    styleUrls: ['./pendenciaeventos-field-filter.component.css']
})
export class PendenciaEventosFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
