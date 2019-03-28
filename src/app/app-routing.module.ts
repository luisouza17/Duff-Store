import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'puro-malte', loadChildren: './puro-malte/puro-malte.module#PuroMaltePageModule' },
  { path: 'pilsen', loadChildren: './pilsen/pilsen.module#PilsenPageModule' },
  { path: 'larger', loadChildren: './larger/larger.module#LargerPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
