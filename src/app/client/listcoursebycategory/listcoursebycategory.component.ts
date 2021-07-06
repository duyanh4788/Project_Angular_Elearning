import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
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
    private modalDetail: MatDialog,
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
    this.subscription.add(
      this.shareListCourseByCategoryService.shareListCourseByCategory.subscribe(
        (data) => {
          this.listCoursByCategory = data;
        }
      )
    )
  }
  // lấy object course từ  (click)="getDetailCourse(course)" row 23 html
  getDetailCourse(course: object) {
    this.shareModalService.getModalCourse(course); // lưu data shared/shareData/shareModalCourse/sharemodalcourse.service
    this.modalDetail.open(ModaldetailcourseComponent); // // mở client/components/modaldetailcourse/modaldetailcourse.component.html
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
