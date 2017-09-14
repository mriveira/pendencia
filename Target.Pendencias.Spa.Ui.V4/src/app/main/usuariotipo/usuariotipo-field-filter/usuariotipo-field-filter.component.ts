import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-usuariotipo-field-filter',
    templateUrl: './usuariotipo-field-filter.component.html',
    styleUrls: ['./usuariotipo-field-filter.component.css']
})
export class UsuarioTipoFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
