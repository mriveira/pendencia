import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { AcompanhadoresService } from '../acompanhadores.service';

@Component({
    selector: 'app-acompanhadores-container-edit',
    templateUrl: './acompanhadores-container-edit.component.html',
    styleUrls: ['./acompanhadores-container-edit.component.css'],
})
export class AcompanhadoresContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private acompanhadoresService: AcompanhadoresService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.acompanhadoresService.initVM();
    }

    ngOnInit() {

       
    }

}
