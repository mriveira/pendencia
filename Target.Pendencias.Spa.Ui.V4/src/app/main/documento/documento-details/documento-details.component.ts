import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-documento-details',
    templateUrl: './documento-details.component.html',
    styleUrls: ['./documento-details.component.css']
})
export class DocumentoDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
