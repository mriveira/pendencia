import { Component, OnInit, Input } from '@angular/core';
import { DocumentoService } from '../documento.service';

@Component({
    selector: 'app-documento-field-edit',
    templateUrl: './documento-field-edit.component.html',
    styleUrls: ['./documento-field-edit.component.css']
})
export class DocumentoFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private documentoService: DocumentoService) { }

    ngOnInit() {
        this.documentoService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    


	public isValid(vm) {
        this.documentoService.isValid(this.vm);
    }
   
}
