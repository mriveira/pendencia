import { Component, OnInit, Input } from '@angular/core';
import { DocumentoService } from '../documento.service';

@Component({
    selector: 'app-documento-field-create',
    templateUrl: './documento-field-create.component.html',
    styleUrls: ['./documento-field-create.component.css']
})
export class DocumentoFieldCreateComponent implements OnInit {

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
