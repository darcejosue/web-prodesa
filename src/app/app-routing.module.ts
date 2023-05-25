import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';


const routes: Routes = [
  {
    path:'',
    component: MainContentComponent 
  },
  {
    path:'home',
    component: SucursalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
