import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-usuario-details',
    templateUrl: './usuario-details.component.html',
    styleUrls: ['./usuario-details.component.css']
})
export class UsuarioDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
