
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projeto-field-details',
    templateUrl: './projeto-field-details.component.html',
    styleUrls: ['./projeto-field-details.component.css']
})
export class ProjetoFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
