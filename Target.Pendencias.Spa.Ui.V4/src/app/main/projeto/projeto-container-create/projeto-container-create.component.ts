import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoService } from '../projeto.service';

@Component({
    selector: 'app-projeto-container-create',
    templateUrl: './projeto-container-create.component.html',
    styleUrls: ['./projeto-container-create.component.css'],
})
export class ProjetoContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private projetoService: ProjetoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.projetoService.initVM();
    }

    ngOnInit() {

       
    }

}
