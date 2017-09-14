import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciadocumento-field-filter',
    templateUrl: './pendenciadocumento-field-filter.component.html',
    styleUrls: ['./pendenciadocumento-field-filter.component.css']
})
export class PendenciaDocumentoFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
