import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoService } from '../projeto.service';

@Component({
    selector: 'app-projeto-container-filter',
    templateUrl: './projeto-container-filter.component.html',
    styleUrls: ['./projeto-container-filter.component.css'],
})
export class ProjetoContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private projetoService: ProjetoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.projetoService.initVM();
    }

    ngOnInit() {

       
    }

}
