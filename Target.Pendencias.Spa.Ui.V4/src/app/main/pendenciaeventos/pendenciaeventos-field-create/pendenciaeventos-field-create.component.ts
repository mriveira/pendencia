import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { PendenciaEventosService } from '../pendenciaeventos.service';

@Component({
    selector: 'app-pendenciaeventos-field-create',
    templateUrl: './pendenciaeventos-field-create.component.html',
    styleUrls: ['./pendenciaeventos-field-create.component.css']
})
export class PendenciaEventosFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private pendenciaEventosService: PendenciaEventosService, private ref: ChangeDetectorRef) { }

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


}
