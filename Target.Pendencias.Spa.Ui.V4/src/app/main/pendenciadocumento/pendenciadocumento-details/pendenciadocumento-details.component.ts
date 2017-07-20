import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pendenciadocumento-details',
    templateUrl: './pendenciadocumento-details.component.html',
    styleUrls: ['./pendenciadocumento-details.component.css']
})
export class PendenciaDocumentoDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
