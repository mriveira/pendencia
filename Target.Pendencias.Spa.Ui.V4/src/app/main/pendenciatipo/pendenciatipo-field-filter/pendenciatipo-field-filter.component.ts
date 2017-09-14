import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciatipo-field-filter',
    templateUrl: './pendenciatipo-field-filter.component.html',
    styleUrls: ['./pendenciatipo-field-filter.component.css']
})
export class PendenciaTipoFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
