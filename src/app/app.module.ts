import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBottomComponent } from './pages/footer-bottom/footer-bottom.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { CardComponent } from './components/menu_flotante/card.component';
import { MapComponent } from './components/map/map.component';
import { AboutUsComponent } from './components/inicio/about-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { HeaderOptionComponent } from './pages/header-option/header-option.component';
import { InformationComponent } from './components/information/information.component';
import { RecordsComponent } from './components/antecedentes/records.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { VacantComponent } from './components/vacant/vacant.component';
import { QuestionComponent } from './components/preguntas/question.component';
import { SocialComponent } from './components/social/social.component';
import { LeyComponent } from './components/legal/ley/ley.component';
import { FormatosReportesComponent } from './components/legal/formatos-reportes/formatos-reportes.component';
import { ReclamosComponent } from './components/reclamos/reclamos.component';
import { ContratosComponent } from './components/legal/contratos/contratos.component';
import { FinanzasComponent } from './components/legal/finanzas/finanzas.component';
import { EmailFormComponent } from './email/email-form.component';
import { TCEAComponent } from './components/legal/tcea/tcea.component';
import { CalculosComponent } from './components/legal/calculos/calculos.component';
import { CalificacionComponent } from './components/calificacion/calificacion.component';
import { HttpClientModule} from '@angular/common/http';
import { PanelComponent } from './components/ignorar/panel.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PremiosComponent } from './components/premios/premios.component';
import { MadresComponent } from './components/imagenes-festejos/madres/madres.component';
import { PadresComponent } from './components/imagenes-festejos/padres/padres.component';
import { AgostoComponent } from './components/imagenes-festejos/agosto/agosto.component';
import { NavidadComponent } from './components/imagenes-festejos/navidad/navidad.component';
import { AniversarioComponent } from './components/imagenes-festejos/aniversario/aniversario.component';

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
    EmailFormComponent,
    TCEAComponent,
    CalculosComponent,
    CalificacionComponent,
    PanelComponent,
    PremiosComponent,
    MadresComponent,
    PadresComponent,
    AgostoComponent,
    NavidadComponent,
    AniversarioComponent,
    
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
