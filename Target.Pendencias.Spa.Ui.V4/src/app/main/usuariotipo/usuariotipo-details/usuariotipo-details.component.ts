import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-usuariotipo-details',
    templateUrl: './usuariotipo-details.component.html',
    styleUrls: ['./usuariotipo-details.component.css']
})
export class UsuarioTipoDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
