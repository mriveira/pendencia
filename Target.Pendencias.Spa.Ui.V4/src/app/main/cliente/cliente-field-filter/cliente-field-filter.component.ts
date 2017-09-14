import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-cliente-field-filter',
    templateUrl: './cliente-field-filter.component.html',
    styleUrls: ['./cliente-field-filter.component.css']
})
export class ClienteFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
