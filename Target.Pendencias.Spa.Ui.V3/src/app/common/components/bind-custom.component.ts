import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'bind-custom',
    template: `<label>{{bcModel}}</label>`,
})
export class BindCustomComponent implements OnInit {

    @Input() bcModel: any;
    @Input() type: any;
    @Input() reletedClass: any;
    @Input() propertyName: any;

    constructor() {

    }
    
    ngOnInit() {
        
       
    }

}
