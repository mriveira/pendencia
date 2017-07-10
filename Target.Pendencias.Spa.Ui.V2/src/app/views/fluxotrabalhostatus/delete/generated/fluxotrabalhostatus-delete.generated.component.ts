import { OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { RemoveService } from '../../../../common/crud/remove.service';
import { FluxoTrabalhoStatus } from '../../models/fluxotrabalhostatus';

export class FluxoTrabalhoStatusDeleteGeneratedComponent implements OnInit {

    @ViewChild('deleteModal')
    public deleteModal: ModalDirective;

    @Output()
    onDelete = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<RemoveService<FluxoTrabalhoStatus>>();

    constructor(public remove: RemoveService<FluxoTrabalhoStatus>) { }

    ngOnInit(): void {
        this.remove.Start('FluxoTrabalhoStatus', this.deleteModal);
        this.remove.onDelete$.subscribe(() => this.onDelete.emit());
        this.instance.emit(this.remove);
    }

}
