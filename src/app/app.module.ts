import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './pages/header-top/header-top.component';
import { FooterBottomComponent } from './pages/footer-bottom/footer-bottom.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    FooterBottomComponent,
    MainContentComponent,
    SucursalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
