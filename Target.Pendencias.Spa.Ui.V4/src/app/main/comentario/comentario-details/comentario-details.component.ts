import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-comentario-details',
    templateUrl: './comentario-details.component.html',
    styleUrls: ['./comentario-details.component.css']
})
export class ComentarioDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
