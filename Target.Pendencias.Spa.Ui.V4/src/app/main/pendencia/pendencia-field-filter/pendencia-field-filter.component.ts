import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendencia-field-filter',
    templateUrl: './pendencia-field-filter.component.html',
    styleUrls: ['./pendencia-field-filter.component.css']
})
export class PendenciaFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
