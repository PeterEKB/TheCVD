import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './core/components/template/template.component';
import { NavComponent } from './core/components/nav/nav.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { LogoComponent } from './core/components/logo/logo.component';
import { SharedCoreModule } from './shared-core/shared-core.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    NavComponent,
    FooterComponent,
    LogoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
