import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FluxoTrabalhoStatusComponent } from '../fluxotrabalhostatus.component';

const routes: Routes = [{ path: '', component: FluxoTrabalhoStatusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FluxoTrabalhoStatusRoutingModule { }
