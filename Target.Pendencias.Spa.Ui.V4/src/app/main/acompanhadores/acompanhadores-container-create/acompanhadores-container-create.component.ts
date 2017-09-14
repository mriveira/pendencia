import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { AcompanhadoresService } from '../acompanhadores.service';

@Component({
    selector: 'app-acompanhadores-container-create',
    templateUrl: './acompanhadores-container-create.component.html',
    styleUrls: ['./acompanhadores-container-create.component.css'],
})
export class AcompanhadoresContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private acompanhadoresService: AcompanhadoresService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.acompanhadoresService.initVM();
    }

    ngOnInit() {

       
    }

}
