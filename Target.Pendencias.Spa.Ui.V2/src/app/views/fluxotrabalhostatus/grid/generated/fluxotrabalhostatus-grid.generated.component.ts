import { FluxoTrabalhoStatusFilter } from './../../models/fluxotrabalhostatus.filter';
import { FluxoTrabalhoStatus } from './../../models/fluxotrabalhostatus';
import { FilterService } from '../../../../common/crud/filter.service';
import { SaveService } from '../../../../common/crud/save.service';
import { RemoveService } from '../../../../common/crud/remove.service';
import { OnInit, Input } from '@angular/core';

export class FluxoTrabalhoStatusGridGeneratedComponent implements OnInit {


    @Input()
    dataList: FluxoTrabalhoStatus[];

    @Input()
    deleteInstance: RemoveService<FluxoTrabalhoStatus>;

    @Input()
    saveInstance: SaveService<FluxoTrabalhoStatus, FluxoTrabalhoStatusFilter>;

    @Input()
    filterInstance: FilterService<FluxoTrabalhoStatus, FluxoTrabalhoStatusFilter>;

    constructor() { }

    ngOnInit(): void { }

}
