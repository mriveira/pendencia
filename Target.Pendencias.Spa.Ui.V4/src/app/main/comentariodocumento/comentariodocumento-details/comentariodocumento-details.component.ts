import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-comentariodocumento-details',
    templateUrl: './comentariodocumento-details.component.html',
    styleUrls: ['./comentariodocumento-details.component.css']
})
export class ComentarioDocumentoDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
