import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { UsuarioTipoService } from '../usuariotipo.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-usuariotipo-field-edit',
    templateUrl: './usuariotipo-field-edit.component.html',
    styleUrls: ['./usuariotipo-field-edit.component.css']
})
export class UsuarioTipoFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private usuarioTipoService: UsuarioTipoService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
