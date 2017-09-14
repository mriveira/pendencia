import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendeciaprioridade-field-filter',
    templateUrl: './pendeciaprioridade-field-filter.component.html',
    styleUrls: ['./pendeciaprioridade-field-filter.component.css']
})
export class PendeciaPrioridadeFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
