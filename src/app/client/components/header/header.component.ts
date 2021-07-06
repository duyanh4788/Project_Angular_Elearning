import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorycourseService } from '@service/categoryCourse/categorycourse.service';
import { CourselistcategoryService } from '@service/CourseListCategory/courselistcategory.service';
import { SearchlistcourseService } from '@service/searchlistcourse/searchlistcourse.service';
import { SharesearchcourseService } from '@shared/shareData/shareSearchCourse/sharesearchcourse.service';
import { SharelistcoursebycategoryService } from '@shared/shareData/shareListCourseByCategory/sharelistcoursebycategory.service';
import { SigincourseService } from 'src/app/core/services/signinCourse/sigincourse.service';
import { LoadingService } from '@service/loading/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

  @ViewChild('formSearch') formSearch !: NgForm // form lấy values từ  #formSearch="ngForm" html
  @Output() sidenavToggle = new EventEmitter(); // emits event đến client/client.component.html open logo responsive

  public arrCategoryCourse: any; // array Danh Sách Khoá Học (!models)
  public userName: any; // hiển thị tên user sau khi login
  public maNhom: string = "" // gán maNhom category
  public maNhomForm: string = "" // gán maNhom search
  public maDanhMuc: string = "" // gán maDanhMuc

  // Arr get value maNhom
  public arrMaNhom: Array<any> = [
    "GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07", "GP08", "GP09", "GP10",
  ]

  constructor(
    private router: Router,
    private cateGoryCourseService: CategorycourseService, // call api category
    private siginCourseService: SigincourseService, // get data localstorage sigin
    private courseListCategoryService: CourselistcategoryService,// call api get list category
    private shareListCourseByCategoryService: SharelistcoursebycategoryService, // save data Category
    private shareSearchCourseService: SharesearchcourseService,// save data search input
    private findlistcourseService: SearchlistcourseService,
    private loadingService: LoadingService, // hiden loading
  ) { }

  ngOnInit(): void {
    this.getCategoryCourses();// call api b1
    this.getUserNameSignIn();// get userName after sigin
    this.selectMaNhomSearchDefault() // call api list course => search
  }

  // GetCategoryCourse => get => core/services/course/categorycourse/categorycourse.service.ts row 13
  // b1 - lấy danh sách danhMucKhoaHoc để lấy b2 - maDanhMuc getCatalogCode(maDanhMuc: string) + maNhom
  getCategoryCourses() {
    this.cateGoryCourseService.getCategoryCourse().subscribe((data) => {
      this.arrCategoryCourse = data;
    });
  }
  // b2 - maDanhMuc => (click)="getCatalogCpde(categorys.maDanhMuc)" html
  getCatalogCode(maDanhMuc: string) {
    this.maDanhMuc = maDanhMuc
  }
  // b3 - maNhom => (click)="selectGroup(ma)" html
  selectGroup(maNhom: string) {
    this.maNhom = maNhom
  }
  // getListCourseByCategory => get (maDanhMuc - b2 , maNhom b3 ) => service/CourseListCategory/courselistcategory.service
  // setListCourseByCategory => pt lưu data => shared/shareData/listCourseByCategory/listcoursebycategory.service
  getListCourseByCategory() {
    this.courseListCategoryService.getListCourseByCategoryApi(this.maDanhMuc, this.maNhom).subscribe(data => {
      if (data) {
        this.shareListCourseByCategoryService.setListCourseByCategory(data)
        this.router.navigate([`category-course/${this.maDanhMuc}`])// chuyển trang
      }
    }, err => {
      alert(err.error)
    })
  }
  // getUserNameSignIn show username after sigin
  getUserNameSignIn() {
    //  get data hoTen localStorage => core/service/signinCourse/signincouse.service.ts row 50
    this.siginCourseService.shareUserName.subscribe(data => {
      this.userName = data
    })
  }
  // (click)="infoUser()" row 30 di chuyển đến component infouser/infouser.component.ts
  infoUser() {
    this.router.navigate(['/infoUser']);
  }
  // (click)="logOutUser()" row 31  di chuyển đến signin
  logOutUser() {
    // code logic logout
    if (this.userName) {
      this.loadingService.show()
      //  gọi pt setCurrentUser thay đổi giá trị localstorage
      let removeItem = localStorage.removeItem('userSignIn')
      this.siginCourseService.setCurrentUser(removeItem);
      let currentUser = this.siginCourseService.getCurrentUser();
      if (!currentUser) {
        this.userName = null
      }
    }
    setTimeout(() => {
      this.loadingService.hidden()
    }, 500);
  }
  // call api tại listCourse selectMaNhomSearch , khi search trên input (html row 34) sẽ filter ngay lập tức
  // getSearchCourse (call api)=> service/searchlistcourse/searchlistcourse.service row 48
  // setCurrentCourse save data =>  service/searchlistcourse/searchlistcourse.service row 34
  selectMaNhomSearch(maNhom: string) {
    this.maNhomForm = maNhom
    this.findlistcourseService.getSearchCourse(this.maNhomForm).subscribe(data => {
      this.findlistcourseService.setCurrentCourse(data)
    })
  }
  // +
  selectMaNhomSearchDefault() {
    this.maNhomForm = "GP01"
    this.findlistcourseService.getSearchCourse(this.maNhomForm).subscribe(data => {
      console.log(data);
      this.findlistcourseService.setCurrentCourse(data)
    })
  }
  // setSearchCourse (save value formSearch) => shared/shareData/shareFindCourse/sharesearchcourse.service
  // (ngSubmit)="searchCourses()" get value html && routerLink => component client/searchcourse/searchcourse.component.ts
  searchCourses() {
    if (this.formSearch.value.search) {
      this.loadingService.show()
      this.shareSearchCourseService.setSearchCourse(this.formSearch.value.search)
      this.router.navigate(['/fincourse'])//chuyển trang
    }
    this.formSearch.reset()// reset form
  }
  // sự kiện mở icon logo sau khi responsive header.component.html (row 5, 35 ) và đc truyền  đến client/client.component.html row 8
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
