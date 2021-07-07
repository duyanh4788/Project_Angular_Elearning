import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SigincourseService } from '../../services/signinCourse/sigincourse.service';

@Injectable({
  providedIn: 'root'
})
// import canActivate: [AuthGuard] trong client/client-routing.module.ts row 23
export class AuthinfouserGuard implements CanActivate {
  constructor(private router: Router, private siginCourseService: SigincourseService) { }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //  get userTypeCode => core/service/signinCourse/signincouse.service.ts row 13
    const userTypeCode = this.siginCourseService.getCurrentTypeCode()
    if (userTypeCode !== null) {
      return true
    }
    this.router.navigate(['/infoUser'])
    if (userTypeCode == null) {
      alert("Bạn Phải Đăng Nhập !")
    }
    this.router.navigate(['/signin'])
    return false
  }
}
