import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './pages/header-top/header-top.component';
import { FooterBottomComponent } from './pages/footer-bottom/footer-bottom.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { CardComponent } from './components/card/card.component';
import { MapComponent } from './components/map/map.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    FooterBottomComponent,
    MainContentComponent,
    SucursalesComponent,
    CardComponent,
    MapComponent,
    AboutUsComponent,
    CarrouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
