import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DatePipe, DecimalPipe, PercentPipe, CurrencyPipe } from "@angular/common";

@Component({
    selector: 'bind-custom',
    template: `<label>{{ bcModel }}</label>`,
    providers: [DatePipe, DecimalPipe, PercentPipe, CurrencyPipe],
})
export class BindCustomComponent implements OnInit, OnChanges {

    @Input() bcModel: any;
    @Input() type: any;
    @Input() reletedClass: any;
    @Input() propertyName: any;

    constructor(
        private datePipe: DatePipe,
        private decimalPipe: DecimalPipe,
        private percentPipe: PercentPipe,
        private currencyPipe: CurrencyPipe) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.type === 'date')
            this.bcModel = this.datePipe.transform(this.bcModel, 'dd/MM/yyyy');

        if (this.type === 'decimal')
            this.bcModel = this.decimalPipe.transform(this.bcModel, '1.2-2');

        if (this.type === 'integer')
            this.bcModel = this.decimalPipe.transform(this.bcModel, '1.0-0');

        if (this.type === 'percent')
            this.bcModel = this.percentPipe.transform(this.bcModel, '1.2-2');

        if (this.type === 'currency')
            this.bcModel = this.currencyPipe.transform(this.bcModel, 'BRL', true, '1.2-2');
    }


    ngOnInit() {

    }

}
