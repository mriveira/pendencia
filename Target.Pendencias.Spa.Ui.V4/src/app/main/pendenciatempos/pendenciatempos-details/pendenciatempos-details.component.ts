import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pendenciatempos-details',
    templateUrl: './pendenciatempos-details.component.html',
    styleUrls: ['./pendenciatempos-details.component.css']
})
export class PendenciaTemposDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
