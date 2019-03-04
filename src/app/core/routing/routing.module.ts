import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards';
import { SecuredLayoutComponent } from '@goods/shared/layout/secured-layout';
import { PublicLayoutComponent } from '@goods/shared/layout/public-layout';
import { NotFoundComponent } from '@goods/shared/layout/not-found';

const routes: Routes = [
    {
        path: '',
        canActivate: [
            AuthGuard
        ],
        component: SecuredLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: '@goods/features/product-details/product-details.module#ProductDetailsModule'
            }
        ]
    },
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: '@goods/features/login/login.module#LoginModule'
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class RoutingModule {}
