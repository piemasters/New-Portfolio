import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './core/layouts/navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: NavbarComponent,  outlet: 'navbar' },
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
  { path: 'process', loadChildren: './pages/process/process.module#ProcessModule' },
  { path: 'page-not-found', loadChildren: './pages/page-not-found/page-not-found.module#PageNotFoundModule' },
  {
    path: 'error', loadChildren: './pages/error-page/error-page.module#ErrorPageModule',
    data: { message: 'You are not authenticated to view this page!' }
  },
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
