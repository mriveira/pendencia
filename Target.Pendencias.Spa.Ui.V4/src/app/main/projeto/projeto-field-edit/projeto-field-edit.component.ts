import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { ProjetoService } from '../projeto.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projeto-field-edit',
    templateUrl: './projeto-field-edit.component.html',
    styleUrls: ['./projeto-field-edit.component.css']
})
export class ProjetoFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private projetoService: ProjetoService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
