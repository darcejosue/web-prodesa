import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { CardComponent } from './components/menu_flotante/card.component';
import { MapComponent } from './components/map/map.component';
import { InformationComponent } from './components/information/information.component';
import { ProductsComponent } from './components/products/products.component';
import { QuestionComponent } from './components/preguntas/question.component';
import { VacantComponent } from './components/vacant/vacant.component';
import { ContactComponent } from './components/contact/contact.component';
import { SocialComponent } from './components/social/social.component';
import { LeyComponent } from './components/legal/ley/ley.component';
import { FormatosReportesComponent } from './components/legal/formatos-reportes/formatos-reportes.component';
import { ContratosComponent } from './components/legal/contratos/contratos.component';
import { FinanzasComponent } from './components/legal/finanzas/finanzas.component';
import { TCEAComponent } from './components/legal/tcea/tcea.component';
import { CalculosComponent } from './components/legal/calculos/calculos.component';
import { CalificacionComponent } from './components/calificacion/calificacion.component';
import { PanelComponent } from './components/ignorar/panel.component';


const routes: Routes = [
  
  {
    path:'',
    component: MainContentComponent 
  },
  {
    path:'calificacion',
    component: CalificacionComponent
    
  },
  {
    path:'cobertura',
    component: MapComponent
  },
  {
    path:'info',
    component: InformationComponent
  },
  {
    path: 'productos',
    component: ProductsComponent
  },
  {
    path: 'social',
    component: SocialComponent
  }
  ,{
    path:'preguntas',
    component: QuestionComponent
  },
  {
    path:'trabajos',
    component: VacantComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'ley 769',
    component: LeyComponent
  },
  {
    path: 'reclamos',
    component: FormatosReportesComponent
  },
  {
    path:'contratos',
    component: ContratosComponent
  },
  {
    path: 'estados financieros',
    component: FinanzasComponent
  },
  {
    path: 'tcea',
    component: TCEAComponent
  },
  {
    path: 'ejemplo calculos',
    component: CalculosComponent
  },
  {
    path: 'panel',
    component: PanelComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
