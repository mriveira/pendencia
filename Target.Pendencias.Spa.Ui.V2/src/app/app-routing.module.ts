import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from './common/auth/auth.service';
import { ApiService } from './common/rest/api.service';
import { AuthGuard } from './common/auth/auth.guard';

import { routesGenerated } from './routing/routing.generated.module';

import { LayoutComponent } from './layout/layout.component';

import { MakeSelectComponent } from './common/components/select.component';
import { MakePaginationComponent } from './common/components/pagination.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: LayoutComponent, canActivate: [AuthGuard], children: routesGenerated },
            { path: 'login', loadChildren: './views/login/login.module#LoginModule' }

        ]),
    ],
    exports: [RouterModule],
    providers: [AuthGuard, AuthService, ApiService]
})
export class AppRoutingModule {
}
