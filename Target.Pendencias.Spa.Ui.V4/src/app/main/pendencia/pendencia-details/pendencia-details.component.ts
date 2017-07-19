import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pendencia-details',
    templateUrl: './pendencia-details.component.html',
    styleUrls: ['./pendencia-details.component.css']
})
export class PendenciaDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
