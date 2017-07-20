import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

/**
 * Cria um select - tem dependência de ApiService
 * Exemplo
 * `<make-select (ngModelChange)="crud.filter.MidiaId = $event" [dataitem]="'Midia'" [value]="crud.model.MidiaId"></make-select>`
 * Injetar esse component no módulo onde for utilizar
 * @constructor

[attr.selected]="i == 0 ? false : null"
[attr.formControlName]="required ? '{{name}}' : null"

 */
@Component({
    selector: 'make-select',
    template: `
          <select [(ngModel)]="value" class="form-control" (change)="_onChange()" required="{{required}}" name="{{name}}"> 
              <option [value]="undefined">Selecione</option>
              <option *ngFor="let option of options; let i=index;" [value]="option.id" >{{ option.name }}</option>
          </select>
    `,  
    providers: [ApiService],
})
export class MakeSelectComponent implements OnInit {

    /**
    * Resource onde será feito o request
    * Exemplo `[dataitem]="'Midia'"`
    */
    @Input() dataitem: string;
    @Input() required: boolean;
    @Input() name: string;

    /**
    * Changes do feitos no select
    * Exemplo `(ngModelChange)="crud.filter.MidiaId = $event"`
    */
    @Output() msChange = new EventEmitter<number>();

    /**
    * Valor inicial que virá no select
    * Exemplo `[value]="crud.model.MidiaId"`
    */
    @Input() value?: number;
    @Input() form: FormGroup;

    public options: any[];

    constructor(public api: ApiService<any>) {

    }

    _onChange() {
        this.msChange.emit(this.value);
    }

    ngOnInit() {

        this.api.setResource(this.dataitem).getDataitem().subscribe((data) => {
            this.options = data.dataList
        });
       
    }

}
