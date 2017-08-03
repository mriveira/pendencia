import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoService } from '../projeto.service';

@Component({
    selector: 'app-projeto-create',
    templateUrl: './projeto-create.component.html',
    styleUrls: ['./projeto-create.component.css'],
})
export class ProjetoCreateComponent implements OnInit {

    vm: ViewModel;
    id: number;
    private sub: any;

    constructor(private projetoService: ProjetoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.projetoService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.projetoService.save(model).subscribe((result) => {
            this.router.navigate(["/projeto"])
        });
    }

}
