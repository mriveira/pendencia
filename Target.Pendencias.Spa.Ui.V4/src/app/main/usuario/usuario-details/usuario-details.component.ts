import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-usuario-details',
    templateUrl: './usuario-details.component.html',
    styleUrls: ['./usuario-details.component.css']
})
export class UsuarioDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
