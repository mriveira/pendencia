import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { ProjetoService } from '../projeto.service';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projeto-field-create',
    templateUrl: './projeto-field-create.component.html',
    styleUrls: ['./projeto-field-create.component.css']
})
export class ProjetoFieldCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;


   constructor(private projetoService: ProjetoService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

   


}
