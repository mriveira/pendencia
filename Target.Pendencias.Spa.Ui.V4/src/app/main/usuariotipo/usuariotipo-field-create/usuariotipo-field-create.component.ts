import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { UsuarioTipoService } from '../usuariotipo.service';

@Component({
    selector: 'app-usuariotipo-field-create',
    templateUrl: './usuariotipo-field-create.component.html',
    styleUrls: ['./usuariotipo-field-create.component.css']
})
export class UsuarioTipoFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private usuarioTipoService: UsuarioTipoService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

   


}
