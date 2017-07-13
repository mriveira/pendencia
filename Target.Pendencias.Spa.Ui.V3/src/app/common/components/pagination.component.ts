import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GlobalService } from 'app/global.service';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'make-pagination',
    template: `
        <pagination 
            (pageChanged)="pageChanged()" 
            itemsPerPage="10" 
            totalItems="{{vm.summary.total}}" 
            previousText="Anterior"
            nextText="Próximo" 
            maxSize="5" 
            rotate="true">
        </pagination>

        <div class="pull-right">
            <h4>
                Total de registros: <span class="label label-primary">{{ vm.summary.total }}</span>
            </h4>
        </div>
    `,
})
export class MakePaginationComponent {

    @Input() vm: any;
    @Input() itemsPerPage: number;
    @Input() totalItems: number;

    constructor() { }

    onPageChanged(paging: any) {

        console.log(paging);
        //GlobalService.operationPaging.emit()
    }

}
