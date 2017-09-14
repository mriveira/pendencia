import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-comentario-field-filter',
    templateUrl: './comentario-field-filter.component.html',
    styleUrls: ['./comentario-field-filter.component.css']
})
export class ComentarioFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
