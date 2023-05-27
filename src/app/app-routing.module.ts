import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { CardComponent } from './components/card/card.component';
import { MapComponent } from './components/map/map.component';
import { InformationComponent } from './components/information/information.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
  {
    path:'',
    component: MainContentComponent 
  },
  {
    path:'card',
    component: CardComponent
    
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
