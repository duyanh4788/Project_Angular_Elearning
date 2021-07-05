import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DetailCourse, RegistedCourse } from 'src/app/core/models/course';
import { InfocourseService } from 'src/app/core/services/infoCourse/infocourse.service';
import { RegisteredService } from '@service/registeredcourse/registered.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public infoRegisterer?: RegistedCourse; // gán model từ core/models/course.ts row 30
  public detailCourse?: DetailCourse; // gán model từ core/models/course.ts row 30
  public maKhoaHoc: string = '';
  private subscription = new Subscription(); //huỷ call api

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private infocourseService: InfocourseService,
    private registeredService: RegisteredService,
  ) { }

  ngOnInit(): void {
    // result => routerLink="detail-course/{{course.maKhoaHoc}}" từ home/listcourse/listcourse.component.html row 27
    // client-routing.module.ts khai báo detail-course/:maKhoaHoc
    // (result.maKhoaHoc ) => nhận từ routerLink="detail-course/{{course.maKhoaHoc}}" row 27 listcourse/listcourse.component.html
    this.activated.params.subscribe((result) => {
      this.maKhoaHoc = result.maKhoaHoc;
    });
    this.getDetailCourse()

  }
  // getInfoCourses => phương thức get taọ từ score/services/infoCourse/infocourse.service.ts row 15
  getDetailCourse() {
    this.infocourseService
      .getDetailCourses(this.maKhoaHoc)
      .subscribe((data) => {
        this.detailCourse = data;
      }, err => {
        if(err.status == 0){
          this.router.navigate(['/'])
        }
      });
  }
  // registererCourse => phương thúc post taọ từ core/services/registerercourse/registerer.service.ts row 13
  registererCourses() {
    let userSignIn = JSON.parse(localStorage.getItem('userSignIn') || '{}');
    const infoUpdate = { ...this.infoRegisterer };
    infoUpdate.maKhoaHoc = this.maKhoaHoc;
    infoUpdate.taiKhoan = userSignIn.taiKhoan;
    if (infoUpdate.taiKhoan) {
      this.registeredService.registeredCourse(infoUpdate).subscribe((data) => {
        alert(data)
      }, err => {
        alert(err.error)
      });
    } else {
      this.router.navigate(['/signin'])
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe(); // dùng để huỷ call api khi ko thành công hoặc truyển trang
  }
}


 // lấy queryrams : <name>?id=1234 lưu trên url
    // this.activated.queryParams.subscribe(result => {
    //   this.maKhoaHoc = result.maKhoaHoc
    // })
