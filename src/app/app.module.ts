import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsModule } from './entities/projects/projects.module';
import { CustomPipesModule } from './shared/pipes/custom-pipes.module';
import { NavbarComponent } from './core/layouts/navbar/navbar.component';
import { FooterComponent } from './core/layouts/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'portfolio'}),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ProjectsModule,
    CustomPipesModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument()  : [],
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    EffectsModule.forRoot([ AuthEffects ]),
    StoreRouterConnectingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
