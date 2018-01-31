import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: NavbarComponent,  outlet: 'navbar' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
