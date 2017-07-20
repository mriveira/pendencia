import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pendenciaeventos-details',
    templateUrl: './pendenciaeventos-details.component.html',
    styleUrls: ['./pendenciaeventos-details.component.css']
})
export class PendenciaEventosDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
