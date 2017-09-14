import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciatempos-field-filter',
    templateUrl: './pendenciatempos-field-filter.component.html',
    styleUrls: ['./pendenciatempos-field-filter.component.css']
})
export class PendenciaTemposFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
