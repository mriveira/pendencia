import { OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { SaveService } from '../../../../common/crud/save.service';
import { FluxoTrabalhoStatusFilter } from '../../models/fluxotrabalhostatus.filter';
import { FluxoTrabalhoStatus } from '../../models/fluxotrabalhostatus';

export class FluxoTrabalhoStatusSaveGeneratedComponent implements OnInit {

    @ViewChild('saveModal')
    public saveModal: ModalDirective;

    @Output()
    onSave = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<SaveService<FluxoTrabalhoStatus, FluxoTrabalhoStatusFilter>>();

    constructor(public save: SaveService<FluxoTrabalhoStatus, FluxoTrabalhoStatusFilter>) { }

    ngOnInit(): void {
        this.save.Start('FluxoTrabalhoStatus', new FluxoTrabalhoStatus(), new FluxoTrabalhoStatusFilter(), this.saveModal);
        this.save.onSave$.subscribe(() => this.onSave.emit());
        this.instance.emit(this.save);
    }

}
