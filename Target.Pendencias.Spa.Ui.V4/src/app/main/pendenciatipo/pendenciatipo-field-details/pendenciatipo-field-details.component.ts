
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciatipo-field-details',
    templateUrl: './pendenciatipo-field-details.component.html',
    styleUrls: ['./pendenciatipo-field-details.component.css']
})
export class PendenciaTipoFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
