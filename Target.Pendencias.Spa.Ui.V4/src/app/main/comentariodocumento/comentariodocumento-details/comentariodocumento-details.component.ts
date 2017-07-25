import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-comentariodocumento-details',
    templateUrl: './comentariodocumento-details.component.html',
    styleUrls: ['./comentariodocumento-details.component.css']
})
export class ComentarioDocumentoDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
