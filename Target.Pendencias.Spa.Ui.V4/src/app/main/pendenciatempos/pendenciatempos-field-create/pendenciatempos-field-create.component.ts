import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { PendenciaTemposService } from '../pendenciatempos.service';

@Component({
    selector: 'app-pendenciatempos-field-create',
    templateUrl: './pendenciatempos-field-create.component.html',
    styleUrls: ['./pendenciatempos-field-create.component.css']
})
export class PendenciaTemposFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private pendenciaTemposService: PendenciaTemposService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }

	public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
	}
	public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.model.usuarioId = eventArgs;
	}


}
