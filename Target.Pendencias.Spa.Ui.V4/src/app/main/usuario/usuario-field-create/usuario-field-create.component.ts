import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
    selector: 'app-usuario-field-create',
    templateUrl: './usuario-field-create.component.html',
    styleUrls: ['./usuario-field-create.component.css']
})
export class UsuarioFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private usuarioService: UsuarioService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

   
   

}
