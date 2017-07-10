import { FluxoTrabalhoStatusSaveGeneratedComponent } from './generated/fluxotrabalhostatus-save.generated.component';
import { Component } from '@angular/core';

import { SaveService } from '../../../common/crud/save.service';
import { FluxoTrabalhoStatusFilter } from '../models/fluxotrabalhostatus.filter';
import { FluxoTrabalhoStatus } from '../models/fluxotrabalhostatus';

@Component({
    selector: 'fluxotrabalhostatus-save',
    templateUrl: './generated/fluxotrabalhostatus-save.generated.component.html',
    providers: [SaveService],
})

export class FluxoTrabalhoStatusSaveComponent extends FluxoTrabalhoStatusSaveGeneratedComponent {

    constructor(public save: SaveService<FluxoTrabalhoStatus, FluxoTrabalhoStatusFilter>) {
        super(save);
    }

}
