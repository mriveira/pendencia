import { FluxoTrabalhoStatusFilterGeneratedComponent } from './generated/fluxotrabalhostatus-filter.generated.component';
import { Component } from '@angular/core';

import { FilterService } from '../../../common/crud/filter.service';
import { FluxoTrabalhoStatusFilter } from '../models/fluxotrabalhostatus.filter';
import { FluxoTrabalhoStatus } from '../models/fluxotrabalhostatus';

@Component({
    selector: 'fluxotrabalhostatus-filter',
    templateUrl: './generated/fluxotrabalhostatus-filter.generated.component.html',
    providers: [FilterService],
})

export class FluxoTrabalhoStatusFilterComponent extends FluxoTrabalhoStatusFilterGeneratedComponent {

    constructor(public filter: FilterService<FluxoTrabalhoStatus, FluxoTrabalhoStatusFilter>) {
        super(filter);
    }

}
