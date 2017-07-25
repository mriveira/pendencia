import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciadocumento-details',
    templateUrl: './pendenciadocumento-details.component.html',
    styleUrls: ['./pendenciadocumento-details.component.css']
})
export class PendenciaDocumentoDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
