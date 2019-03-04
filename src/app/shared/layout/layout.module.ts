import { NgModule } from '@angular/core';
import { PublicLayoutComponent } from './public-layout';
import { SecuredLayoutComponent } from './secured-layout';
import { RouterModule } from '@angular/router';
import { UiKitModule } from '../ui-kit';
import { NotFoundComponent } from './not-found';

@NgModule({
    imports: [RouterModule, UiKitModule],
    declarations: [PublicLayoutComponent, SecuredLayoutComponent, NotFoundComponent],
})
export class LayoutModule { }
