import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StyleComponent } from './style/style.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'style'
  },
  {
    path: 'style',
    component: StyleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
