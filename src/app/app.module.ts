import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from './store';
import { RoutingModule } from './core/routing';
import { LayoutModule } from './shared/layout';
import { UiKitModule } from './shared/ui-kit';
import { RouterModule } from '@angular/router';
import { HttpModule } from './core/http/http.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    RoutingModule,
    LayoutModule,
    UiKitModule,
    // StoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
