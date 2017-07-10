import { Component, OnInit } from '@angular/core';

import { RemoveService } from '../../common/crud/remove.service';
import { FilterService } from '../../common/crud/filter.service';
import { SaveService } from '../../common/crud/save.service';

import { FluxoTrabalhoStatusFilter } from './models/fluxotrabalhostatus.filter';
import { FluxoTrabalhoStatus } from './models/fluxotrabalhostatus';

@Component({
    selector: 'fluxotrabalhostatus',
    templateUrl: './fluxotrabalhostatus.component.html',
    providers: [FilterService],
})
export class FluxoTrabalhoStatusComponent implements OnInit {

    deleteInstance: RemoveService<FluxoTrabalhoStatus>;
    saveInstance: SaveService<FluxoTrabalhoStatus, FluxoTrabalhoStatusFilter>;
    filterInstance: FilterService<FluxoTrabalhoStatus, FluxoTrabalhoStatusFilter>;

    constructor() { }

    ngOnInit() { }

}
