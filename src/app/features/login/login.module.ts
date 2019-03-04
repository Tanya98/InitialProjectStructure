import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { UiKitModule } from '@goods/shared/ui-kit';
import { loginModuleRoutes } from './login.routing';

@NgModule({
    imports: [
        CommonModule,
        UiKitModule,
        loginModuleRoutes
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
