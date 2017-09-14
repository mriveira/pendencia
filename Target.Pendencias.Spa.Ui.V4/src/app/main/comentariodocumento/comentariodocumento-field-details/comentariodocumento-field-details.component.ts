
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-comentariodocumento-field-details',
    templateUrl: './comentariodocumento-field-details.component.html',
    styleUrls: ['./comentariodocumento-field-details.component.css']
})
export class ComentarioDocumentoFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
