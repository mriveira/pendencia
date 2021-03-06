import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { AcompanhadoresService } from '../acompanhadores.service';

@Component({
    selector: 'app-acompanhadores-container-filter',
    templateUrl: './acompanhadores-container-filter.component.html',
    styleUrls: ['./acompanhadores-container-filter.component.css'],
})
export class AcompanhadoresContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private acompanhadoresService: AcompanhadoresService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.acompanhadoresService.initVM();
    }

    ngOnInit() {

       
    }

}
