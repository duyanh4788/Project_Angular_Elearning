import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SigincourseService } from '../../services/signinCourse/sigincourse.service';

@Injectable()
// khai báo tại app.module.ts row 21
export class JwtInterceptor implements HttpInterceptor {

  constructor(private siginCourseService: SigincourseService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //  get token core/service/signinCourse/signincouse.service.ts row 13
    const accessToken = this.siginCourseService.getCurrentToken();   
    if (accessToken) {
      request = request.clone({
        headers: request.headers.append("Authorization", `Bearer ${accessToken}`)
      })
    }
    return next.handle(request);
  }
}
