import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SigincourseService } from '../../services/signinCourse/sigincourse.service';

@Injectable({
  providedIn: 'root',
})
// import canActivate: [AuthGuard] trong admin/admin-routing.module.ts row 12
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private siginCourseService: SigincourseService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //  get currentTypeCode  core/service/signinCourse/signincouse.service.ts 
    const userTypeCode = this.siginCourseService.getCurrentTypeCode();
    if (userTypeCode !== "GV") {
      alert("Bạn Không Phải Admin !")
      this.router.navigate(['/signin'], {
        queryParams: { successUrl: state.url },
      });
      return false;
    }

    if (userTypeCode && userTypeCode === 'GV') {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
