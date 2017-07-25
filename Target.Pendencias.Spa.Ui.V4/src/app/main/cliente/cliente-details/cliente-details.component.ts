import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-cliente-details',
    templateUrl: './cliente-details.component.html',
    styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
