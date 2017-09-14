import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projeto-field-filter',
    templateUrl: './projeto-field-filter.component.html',
    styleUrls: ['./projeto-field-filter.component.css']
})
export class ProjetoFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
