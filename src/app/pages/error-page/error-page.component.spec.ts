import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page.component';
import { NgModuleFactoryLoader } from '@angular/core';
import { AboutModule } from '../about/about.module';
import { ErrorPageModule } from './error-page.module';
import { of } from 'rxjs';


describe('ErrorPageComponent', () => {
  let component;
  let fixture: ComponentFixture<ErrorPageComponent>;
  let location: Location;
  let router: Router;
  const routes: Routes = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        AboutModule,
        ErrorPageModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ message: 'You are not authenticated to view this page!' })
          }
        },
        ErrorPageComponent
      ]
    })
    .compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(ErrorPageComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    router.initialNavigation();

    // Configure lazy loaded components
    const loader = TestBed.get(NgModuleFactoryLoader);
    loader.stubbedModules = {
      lazyAboutModule: AboutModule,
      lazyErrorModule: ErrorPageModule
    };

    // Update router
    router.resetConfig([
      { path: 'about', loadChildren: 'lazyAboutModule' },
      {
        path: 'error', loadChildren: 'lazyErrorModule',
        data: { message: 'You are not authenticated to view this page!' }
      }
    ]);
  }));

  it('fakeAsync works', fakeAsync(() => {
    const promise = new Promise((resolve) => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('should create', () => {
    router.navigate(['/error']);
    component = ErrorPageComponent;
    expect(component).toBeTruthy();
  });

  it('should navigate to the Error page directly', fakeAsync(() => {
    router.navigateByUrl('/error');
    tick(50);
    expect(location.path()).toBe('/error');
  }));

  it('should render an error title', fakeAsync(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Error');
  }));

  it('should display the correct error message', fakeAsync(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toBe('You are not authenticated to view this page!');
  }));

});
