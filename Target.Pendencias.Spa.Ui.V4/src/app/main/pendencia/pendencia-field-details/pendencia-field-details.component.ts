
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendencia-field-details',
    templateUrl: './pendencia-field-details.component.html',
    styleUrls: ['./pendencia-field-details.component.css']
})
export class PendenciaFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
