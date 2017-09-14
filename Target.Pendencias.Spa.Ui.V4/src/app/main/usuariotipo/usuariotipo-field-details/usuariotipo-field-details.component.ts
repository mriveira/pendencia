
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-usuariotipo-field-details',
    templateUrl: './usuariotipo-field-details.component.html',
    styleUrls: ['./usuariotipo-field-details.component.css']
})
export class UsuarioTipoFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
