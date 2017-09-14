import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimesheetComponent } from './timesheet.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: TimesheetComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class TimesheetRoutingModule {

}