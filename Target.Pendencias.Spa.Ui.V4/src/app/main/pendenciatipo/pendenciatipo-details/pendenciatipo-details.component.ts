import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciatipo-details',
    templateUrl: './pendenciatipo-details.component.html',
    styleUrls: ['./pendenciatipo-details.component.css']
})
export class PendenciaTipoDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
