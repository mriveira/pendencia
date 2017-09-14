import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-comentariodocumento-field-filter',
    templateUrl: './comentariodocumento-field-filter.component.html',
    styleUrls: ['./comentariodocumento-field-filter.component.css']
})
export class ComentarioDocumentoFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
