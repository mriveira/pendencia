import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-documento-field-filter',
    templateUrl: './documento-field-filter.component.html',
    styleUrls: ['./documento-field-filter.component.css']
})
export class DocumentoFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
