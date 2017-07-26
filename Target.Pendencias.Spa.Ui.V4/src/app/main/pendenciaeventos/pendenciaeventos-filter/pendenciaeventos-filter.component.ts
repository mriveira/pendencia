import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pendenciaeventos-filter',
    templateUrl: './pendenciaeventos-filter.component.html',
    styleUrls: ['./pendenciaeventos-filter.component.css']
})
export class PendenciaEventosFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    

}
