import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { AppComponent } from './app.component';
import { ProjectsModule } from './entities/projects/projects.module';
import { CustomPipesModule } from './pipes/custom-pipes.module';
import { AboutModule } from './pages/about/about.module';
import { ProcessModule } from './pages/process/process.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ProcessModule,
    ProjectsModule,
    CustomPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
