import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '@service/loading/loading.service';
import { SigincourseService } from 'src/app/core/services/signinCourse/sigincourse.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})

export class SigninComponent implements OnInit {

  @ViewChild('formSignIn') formSignIn!: NgForm; // ngForm signin.component.html

  public notiFy: string = ""

  constructor(
    private siginCourseService: SigincourseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService, // hiden loading
  ) { }

  ngOnInit(): void { }
  // sigincourseService (post api) =>  core/services/signinCourse/signinCourse.service.ts row 32 có alert nêú đăng nhập sai
  handleSignIn() {
    // users => form signin.component.html row 3
    this.siginCourseService.signInUser(this.formSignIn.value).subscribe((data) => {

      const { hoTen, maLoaiNguoiDung, accessToken, taiKhoan, ..._data } = data

      alert(' Hello ' + hoTen);
     
      localStorage.setItem('userName', JSON.stringify(hoTen)); // save data localstrogate
      this.siginCourseService.setCurrentUserName(hoTen); // post data userName core/services/signcourse/sigincourse.service.ts

      localStorage.setItem('userTypeCode', JSON.stringify(maLoaiNguoiDung)); // save data localstrogate
      this.siginCourseService.setCurrentTypeCode(maLoaiNguoiDung); // post data maLoaiNguoiDung 

      localStorage.setItem('toKen', JSON.stringify(accessToken)); // save data localstrogate 
      this.siginCourseService.setCurrentToken(accessToken); // post data accessToken 

      localStorage.setItem('account', JSON.stringify(taiKhoan)); // save data localstrogate 
      this.siginCourseService.setCurrentAccount(taiKhoan); // post data accessToken 

      // successUrl => sigin admin && registererCourses()
      const { successUrl } = this.activatedRoute.snapshot.queryParams;
      console.log(this.activatedRoute.snapshot.queryParams);
      console.log(successUrl);
      
      if (successUrl) {
        this.router.navigate([successUrl])
      } else {
        this.router.navigate(['/'])
      }

    }, err => {
      this.notiFy = err.error
      //service/loading/loading.service
      this.loadingService.show()
      setTimeout(() => {
        this.loadingService.hidden()
      }, 500);
      this.formSignIn.reset()
    });
  }
}
