import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: NavbarComponent,  outlet: 'navbar' },
  { path: 'about', loadChildren: 'app/pages/about/about.module#AboutModule' },
  { path: 'process', loadChildren: 'app/pages/process/process.module#ProcessModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
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
