import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-acompanhadores-field-filter',
    templateUrl: './acompanhadores-field-filter.component.html',
    styleUrls: ['./acompanhadores-field-filter.component.css']
})
export class AcompanhadoresFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
