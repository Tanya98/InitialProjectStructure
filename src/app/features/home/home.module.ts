import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UiKitModule } from '@goods/shared/ui-kit';
import { homeModuleRoutes } from './home.routing';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        UiKitModule,
        // StoreModule.forFeature('home', []),
        // EffectsModule.forFeature([]),
        homeModuleRoutes
    ],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
