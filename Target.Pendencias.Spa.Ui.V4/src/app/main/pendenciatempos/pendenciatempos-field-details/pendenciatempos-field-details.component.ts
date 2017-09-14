
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciatempos-field-details',
    templateUrl: './pendenciatempos-field-details.component.html',
    styleUrls: ['./pendenciatempos-field-details.component.css']
})
export class PendenciaTemposFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
