import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth-guard.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import createSpyObj = jasmine.createSpyObj;
import { AboutComponent } from '../../pages/about/about.component';
import { ErrorPageComponent } from '../../pages/error-page/error-page.component';

const mockSnapshot: any = createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);

describe('AuthGuardService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'abouttest', component: AboutComponent, canActivate: [ AuthGuard ] },
          {
            path: 'error', component: ErrorPageComponent,
            data: { message: 'You are not authenticated to view this page!' }
          }
        ])
      ],
      declarations: [AboutComponent, ErrorPageComponent],
      providers: [
        {
          provide: RouterStateSnapshot,
          useValue: mockSnapshot
        }
      ]
    }).compileComponents();
  });

  it('checks if a user is valid', () => {

    inject([AuthGuard, AuthService, Router], (guard: AuthGuard, auth: AuthService, router: Router) => {
      mockSnapshot.url = '/abouttest';
      spyOn(router, 'navigate');
      expect(guard.canActivate(null, mockSnapshot)).toBeFalsy();
      expect(guard.canActivate(null, mockSnapshot)).toBeTruthy();
      expect(router.navigate).toHaveBeenCalled();

      const fixture = TestBed.createComponent(AboutComponent);
      expect(guard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot)).toBe(false);
      expect(guard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot)).toBe(true);
    });
  });
});
