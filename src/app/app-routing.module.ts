import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { CardComponent } from './components/card/card.component';


const routes: Routes = [
  {
    path:'',
    component: MainContentComponent 
  },
  {
    path:'home',
    component: SucursalesComponent
  },
  {
    path:'card',
    component: CardComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
