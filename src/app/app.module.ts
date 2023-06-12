import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBottomComponent } from './pages/footer-bottom/footer-bottom.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { CardComponent } from './components/card/card.component';
import { MapComponent } from './components/map/map.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { HeaderOptionComponent } from './pages/header-option/header-option.component';
import { InformationComponent } from './components/information/information.component';
import { RecordsComponent } from './components/records/records.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { VacantComponent } from './components/vacant/vacant.component';
import { QuestionComponent } from './components/question/question.component';
import { SocialComponent } from './components/social/social.component';
import { LeyComponent } from './components/legal/ley/ley.component';
import { FormatosReportesComponent } from './components/legal/formatos-reportes/formatos-reportes.component';
import {  MessageService  } from './services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReclamosComponent } from './components/reclamos/reclamos.component';
import { ContratosComponent } from './components/legal/contratos/contratos.component';
import { FinanzasComponent } from './components/legal/finanzas/finanzas.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterBottomComponent,
    MainContentComponent,
    CardComponent,
    MapComponent,
    AboutUsComponent,
    CarrouselComponent,
    HeaderOptionComponent,
    InformationComponent,
    RecordsComponent,
    ProductsComponent,
    ContactComponent,
    VacantComponent,
    QuestionComponent,
    SocialComponent,
    LeyComponent,
    FormatosReportesComponent,
    ReclamosComponent,
    ContratosComponent,
    FinanzasComponent,
    
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
