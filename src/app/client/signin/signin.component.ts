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

  @ViewChild('formSignIn') formSignIn!: NgForm; // ngForm signin.component.html
  public signIns?: UserSigIn;
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
      this.signIns = data;
      alert(' Hello ' + data.hoTen);
      localStorage.setItem('userSignIn', JSON.stringify(data)); // save data localstrogate (get token )
      this.siginCourseService.setCurrentUser(data); // post data object core/services/signcourse/sigincourse.service.ts row 21
      
      localStorage.setItem('userName', JSON.stringify(data.hoTen)); // save data localstrogate ( get hoTen show name header)
      this.siginCourseService.setCurrentUserName(data.hoTen); // post data userName core/services/signcourse/sigincourse.service.ts row 53

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
