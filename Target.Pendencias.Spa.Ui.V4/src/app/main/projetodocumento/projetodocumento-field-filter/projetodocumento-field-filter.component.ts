import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projetodocumento-field-filter',
    templateUrl: './projetodocumento-field-filter.component.html',
    styleUrls: ['./projetodocumento-field-filter.component.css']
})
export class ProjetoDocumentoFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
