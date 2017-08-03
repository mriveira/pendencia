import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { AcompanhadoresService } from '../acompanhadores.service';

@Component({
    selector: 'app-acompanhadores-create',
    templateUrl: './acompanhadores-create.component.html',
    styleUrls: ['./acompanhadores-create.component.css'],
})
export class AcompanhadoresCreateComponent implements OnInit {

    vm: ViewModel;
    id: number;
    private sub: any;

    constructor(private acompanhadoresService: AcompanhadoresService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.acompanhadoresService.initVM();
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.acompanhadoresService.save(model).subscribe((result) => {
            this.router.navigate(["/acompanhadores"])
        });
    }

}
