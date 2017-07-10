import { OnInit, Output, EventEmitter } from '@angular/core';

import { FilterService } from '../../../../common/crud/filter.service';
import { FluxoTrabalhoStatusFilter } from '../../models/fluxotrabalhostatus.filter';
import { FluxoTrabalhoStatus } from '../../models/fluxotrabalhostatus';

export class FluxoTrabalhoStatusFilterGeneratedComponent implements OnInit {

    @Output()
    onFilter = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<FilterService<FluxoTrabalhoStatus, FluxoTrabalhoStatusFilter>>();

    constructor(public filter: FilterService<FluxoTrabalhoStatus, FluxoTrabalhoStatusFilter>) { }

    ngOnInit(): void {
        this.filter.Start('FluxoTrabalhoStatus', new FluxoTrabalhoStatusFilter());
        this.filter.onFilter$.subscribe(() => this.onFilter.emit());
        this.instance.emit(this.filter);
    }
}
