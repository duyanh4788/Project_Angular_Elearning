import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RegisteredService } from '@service/registeredcourse/registered.service';
import { SigincourseService } from '@service/signinCourse/sigincourse.service';
import { SharelistcoursebycategoryService } from '@shared/shareData/shareListCourseByCategory/sharelistcoursebycategory.service';
import { SharemodalcourseService } from '@shared/shareData/shareModalCourse/sharemodalcourse.service';
import { Subscription } from 'rxjs';
import { RegistedCourse } from 'src/app/core/models/course';
import { ListCourseByCategory } from 'src/app/core/models/listcourseByCategory';
import { ModaldetailcourseComponent } from '../components/modaldetailcourse/modaldetailcourse.component';

@Component({
  selector: 'app-listcoursebycategory',
  templateUrl: './listcoursebycategory.component.html',
  styleUrls: ['./listcoursebycategory.component.scss'],
})

export class ListcoursebycategoryComponent implements OnInit {

  public listCoursByCategory: ListCourseByCategory[] = []; // model tạo từ core/models/listcourseByCategory
  public gridColums: number = 4; // hiển thị 4 col trên row (mat-card)
  public infoRegisterer?: RegistedCourse; // gán model từ core/models/course.ts row 30
  public maKhoaHoc: string = ""; // gán giá trị
  public maDanhMuc: string = ""; // show html Khoá Học

  // pagination
  public collection: Array<any> = [];
  public p: number = 1;
  // pagination

  constructor(
    private shareListCourseByCategoryService: SharelistcoursebycategoryService,
    private shareModalService: SharemodalcourseService,
    private siginCourseService: SigincourseService,
    private modalDetail: MatDialog,
    private registeredService: RegisteredService,
    private activated: ActivatedRoute,
  ) {
    // pagination
    for (let i = 1; i <= 5; i++) {
      this.collection.push(this.listCoursByCategory);
    }
    // pagination
  }

  private subscription = new Subscription(); // huỷ call api nếu ko thành công

  ngOnInit(): void {
    this.getCateGoryCourseService();
    this.getCodeCategory()
  }
  // nhận data => shared/shareData/listCourseByCategory/listcoursebycategory.service
  // từ components/header/header.component => render html
  getCateGoryCourseService() {
    this.shareListCourseByCategoryService.shareListCourseByCategory.subscribe(
      (data) => {
        this.listCoursByCategory = data;
      }
    );
  }
  // lấy object course từ  (click)="getDetailCourse(course)" row 23 html
  getDetailCourse(course: object) {
    this.shareModalService.getModalCourse(course); // lưu data shared/shareData/shareModalCourse/sharemodalcourse.service
    this.modalDetail.open(ModaldetailcourseComponent); // // mở client/components/modaldetailcourse/modaldetailcourse.component.html
  }
  // registererCourse => phương thúc post taọ từ core/services/registerercourse/registerer.service.ts row 13
  // getCurrentUser => lấy data từ service/signinCourse/sigincourse.service row 13
  registererCourses() {
    let userSignIn = this.siginCourseService.getCurrentUser()
    const infoUpdate = { ...this.infoRegisterer };
    infoUpdate.maKhoaHoc = this.maKhoaHoc;
    infoUpdate.taiKhoan = userSignIn.taiKhoan;
    this.subscription.add(this.registeredService.registeredCourse(infoUpdate).subscribe((data) => {
      console.log(data);
    }, err => {
      alert(err.error)
    }))
  }
  // nhận maDanhMuc
  getCodeCategory() {
    this.activated.params.subscribe(data => {
      this.maDanhMuc = data.maDanhMuc
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // dùng để huỷ call api khi ko thành công hoặc truyển trang
  }

}
