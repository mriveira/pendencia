
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-comentario-field-details',
    templateUrl: './comentario-field-details.component.html',
    styleUrls: ['./comentario-field-details.component.css']
})
export class ComentarioFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
