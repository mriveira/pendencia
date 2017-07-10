import { FluxoTrabalhoStatusDeleteGeneratedComponent } from './generated/fluxotrabalhostatus-delete.generated.component';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RemoveService } from '../../../common/crud/remove.service';
import { FluxoTrabalhoStatus } from '../models/fluxotrabalhostatus';

@Component({
    selector: 'fluxotrabalhostatus-delete',
    templateUrl: './generated/fluxotrabalhostatus-delete.generated.component.html',
    providers: [RemoveService],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FluxoTrabalhoStatusDeleteComponent extends FluxoTrabalhoStatusDeleteGeneratedComponent {

    constructor(public remove: RemoveService<FluxoTrabalhoStatus>) {
        super(remove);
    }

}
