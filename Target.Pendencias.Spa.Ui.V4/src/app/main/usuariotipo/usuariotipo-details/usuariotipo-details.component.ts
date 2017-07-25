import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-usuariotipo-details',
    templateUrl: './usuariotipo-details.component.html',
    styleUrls: ['./usuariotipo-details.component.css']
})
export class UsuarioTipoDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
