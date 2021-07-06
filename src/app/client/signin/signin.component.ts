import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '@service/loading/loading.service';
import { UserSigIn } from 'src/app/core/models/client';
import { SigincourseService } from 'src/app/core/services/signinCourse/sigincourse.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})

export class SigninComponent implements OnInit {

  @ViewChild('formSignIn') formSignIn!: NgForm; // lâý giá trị từ ngForm signin.component.html
  public signIns?: UserSigIn;
  public notiFy: string = ""
  //siginCourseService => goị class từ core/services/signcourse/sigincourse.service.ts

  constructor(
    private siginCourseService: SigincourseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService, // hiden loading
  ) { }

  ngOnInit(): void { }
  // sigincourseService => phương thức post taọ từ core/services/signinCourse/signinCourse.service.ts row 32 có alert nêú đăng nhập sai
  handleSignIn() {
    // users => giá trị lấy từ form signin.component.html row 3
    this.siginCourseService.signInUser(this.formSignIn.value).subscribe((data) => {
      this.signIns = data;
      alert(' Hello ' + data.hoTen);
      localStorage.setItem('userSignIn', JSON.stringify(data)); // lưu data localstrogate
      this.siginCourseService.setCurrentUser(data); // nhận data vào core/services/signcourse/sigincourse.service.ts row 19

      // successUrl => sigin admin && registererCourses()
      const { successUrl } = this.activatedRoute.snapshot.queryParams;
      if (successUrl) {
        this.router.navigate([successUrl])
      } else {
        this.router.navigate(['/'])
      }

    }, err => {
      this.notiFy = err.error
      this.loadingService.show()
      setTimeout(() => {
        this.loadingService.hidden()//service/loading/loading.service
      }, 500);
      this.formSignIn.reset()
    });
  }
}
// signin?successUrl=%5Bobject%20Object%5D

// signin?successUrl=%5Bobject%20Object%5D

// signin?successUrl=%2Fdetail-course%2FAngular01