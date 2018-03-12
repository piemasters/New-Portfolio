import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: NavbarComponent,  outlet: 'navbar' },
  { path: '', loadChildren: 'app/pages/home/home.module#HomeModule' },
  { path: 'about', loadChildren: 'app/pages/about/about.module#AboutModule' },
  { path: 'process', loadChildren: 'app/pages/process/process.module#ProcessModule' },
  { path: 'page-not-found', loadChildren: 'app/pages/page-not-found/page-not-found.module#PageNotFoundModule' },
  { path: '**', redirectTo: 'page-not-found'} // Ensure this is the last path
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
