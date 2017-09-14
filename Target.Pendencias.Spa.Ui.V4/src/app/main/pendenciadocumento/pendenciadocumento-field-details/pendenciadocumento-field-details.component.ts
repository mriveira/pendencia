
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciadocumento-field-details',
    templateUrl: './pendenciadocumento-field-details.component.html',
    styleUrls: ['./pendenciadocumento-field-details.component.css']
})
export class PendenciaDocumentoFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
