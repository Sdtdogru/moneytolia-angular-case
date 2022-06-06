import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaignAddComponent } from './campaign/compaign-add/compaign-add.component';
import { CompaignsComponent } from './campaign/compaigns/compaigns.component';
import { AuthGuard } from './core/authentication/auth';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:MainLayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'' ,redirectTo: '/login', pathMatch: 'full'
      },
      {
        path:'kampanya-listesi',
        canActivate: [AuthGuard],
        component:CompaignsComponent
      },
      {
        path:'kampanya-olustur',
        canActivate: [AuthGuard],
        component:CompaignAddComponent
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
