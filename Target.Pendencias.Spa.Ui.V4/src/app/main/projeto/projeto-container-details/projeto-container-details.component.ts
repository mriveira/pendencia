import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoService } from '../projeto.service';

@Component({
    selector: 'app-projeto-container-details',
    templateUrl: './projeto-container-details.component.html',
    styleUrls: ['./projeto-container-details.component.css'],
})
export class ProjetoContainerDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private projetoService: ProjetoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.projetoService.initVM();
    }

    ngOnInit() {

       
    }

}
