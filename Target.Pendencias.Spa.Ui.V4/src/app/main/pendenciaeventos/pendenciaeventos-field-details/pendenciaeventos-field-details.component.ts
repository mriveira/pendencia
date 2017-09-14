
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciaeventos-field-details',
    templateUrl: './pendenciaeventos-field-details.component.html',
    styleUrls: ['./pendenciaeventos-field-details.component.css']
})
export class PendenciaEventosFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
