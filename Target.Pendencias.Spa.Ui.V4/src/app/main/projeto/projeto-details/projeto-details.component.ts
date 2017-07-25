import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projeto-details',
    templateUrl: './projeto-details.component.html',
    styleUrls: ['./projeto-details.component.css']
})
export class ProjetoDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
