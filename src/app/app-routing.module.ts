import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: NavbarComponent,  outlet: 'navbar' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
