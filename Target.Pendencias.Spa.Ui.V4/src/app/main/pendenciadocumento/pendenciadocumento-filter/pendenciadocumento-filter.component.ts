import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pendenciadocumento-filter',
    templateUrl: './pendenciadocumento-filter.component.html',
    styleUrls: ['./pendenciadocumento-filter.component.css']
})
export class PendenciaDocumentoFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    

}
