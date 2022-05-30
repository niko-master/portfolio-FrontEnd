import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'editar/:explaboral_id', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
