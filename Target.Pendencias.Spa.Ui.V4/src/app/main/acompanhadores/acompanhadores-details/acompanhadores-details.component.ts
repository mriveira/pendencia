import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-acompanhadores-details',
    templateUrl: './acompanhadores-details.component.html',
    styleUrls: ['./acompanhadores-details.component.css']
})
export class AcompanhadoresDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
