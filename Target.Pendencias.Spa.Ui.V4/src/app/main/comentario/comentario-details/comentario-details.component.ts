import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-comentario-details',
    templateUrl: './comentario-details.component.html',
    styleUrls: ['./comentario-details.component.css']
})
export class ComentarioDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
