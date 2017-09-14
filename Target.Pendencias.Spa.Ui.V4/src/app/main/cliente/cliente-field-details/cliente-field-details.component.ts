
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-cliente-field-details',
    templateUrl: './cliente-field-details.component.html',
    styleUrls: ['./cliente-field-details.component.css']
})
export class ClienteFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
