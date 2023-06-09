import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: BodyComponent
  // },
  {
    path: 'home',
    component: BodyComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./body/body-routing.module').then( m => m.BodyRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'countries'
  }

]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],

})
export class AppRoutingModule { }
