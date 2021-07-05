import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModaldetailcourseComponent } from '../../components/modaldetailcourse/modaldetailcourse.component';
import { ListCourse } from 'src/app/core/models/course';
import { GetlistcourseService } from '@service/listCourse/getlistcourse.service';
import { SharemodalcourseService } from '@shared/shareData/shareModalCourse/sharemodalcourse.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-listcourse',
  templateUrl: './listcourse.component.html',
  styleUrls: ['./listcourse.component.scss'],
})

export class ListcourseComponent implements OnInit {

  public arrListCourse: ListCourse[] = []; // gán model từ core/models/course.ts row 1
  public maNhom: string = '';

  constructor(
    private courseService: GetlistcourseService,
    private shareModalService: SharemodalcourseService,
    private modalDetail: MatDialog,
  ) { }

  private subListCourses = new Subscription(); // huỷ call api nếu ko thành công
  private subListDefault = new Subscription(); // huỷ call api nếu ko thành công

  public arrMaNhom: Array<any> = ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',];

  ngOnInit(): void {
    this.getListDefault();
  }

  // getListCourse => phương thức get taọ từ core/services/listCourse/getlistcourse.service.ts row 16 , maNhom => nhận từ getListCourses(ma) listcourse.component.html
  // unsubricce khi dùng getListDefault
  getListCourses(maNhom: string) {
    this.subListCourses.add(this.courseService.getListCourse(maNhom).subscribe((data) => {
      this.arrListCourse = data;
    }));
  }
  // lấy danh sách mã nhóm GP01 mặc định khi hiển thị lần đầu
  getListDefault(maNhom = 'GP01') {
    this.subListDefault.add(this.courseService.getListCourse(maNhom).subscribe((data) => {
      this.arrListCourse = data;
    }));
  }
  // lấy object course từ  (click)="getDetailCourse(course)" row 28
  getDetailCourse(course: object) {
    this.shareModalService.getModalCourse(course); // truyền object course đến core/modalCourse/modalcourse.service.ts row 14
    this.modalDetail.open(ModaldetailcourseComponent); // mở client/components/modaldetailcourse/modaldetailcourse.component.html
  }
  //huỷ call api khi đổi maNhom || rời trang
  ngOnDestroy() {
    this.subListCourses.unsubscribe();
    this.subListDefault.unsubscribe();
  }

  // carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
