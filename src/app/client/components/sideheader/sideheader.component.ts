import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CourselistcategoryService } from '@service/CourseListCategory/courselistcategory.service';
import { SearchlistcourseService } from '@service/searchlistcourse/searchlistcourse.service';
import { SharesearchcourseService } from '@shared/shareData/shareSearchCourse/sharesearchcourse.service';
import { SharelistcoursebycategoryService } from '@shared/shareData/shareListCourseByCategory/sharelistcoursebycategory.service';
import { CategorycourseService } from 'src/app/core/services/categoryCourse/categorycourse.service';
import { SigincourseService } from 'src/app/core/services/signinCourse/sigincourse.service';
import { LoadingService } from '@service/loading/loading.service';

@Component({
    selector: 'app-sideheader',
    templateUrl: './sideheader.component.html',
    styleUrls: ['./sideheader.component.scss'],
})

export class SideheaderComponent implements OnInit {

    @ViewChild('formSearch') formSearch !: NgForm // form lấy values từ  #formSearch="ngForm" html
    @Output() sidenavClose = new EventEmitter(); // emits event đến client/client.component.html open logo responsive

    public arrCategoryCourse: any; // array Danh Sách Khoá Học  (!models)
    public userName: any; // hiển thị tên user sau khi login
    public maNhom: string = "" // gán maNhom
    public maNhomForm: string = "" // gán maNhom search
    public maDanhMuc: string = "" // gán maDanhMuc

    public arrMaNhom: Array<any> = [ // tạo mảng mã nhóm
        "GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07", "GP08", "GP09", "GP10",
    ]

    constructor(
        private router: Router,
        private cateGoryCourseService: CategorycourseService,// call api category
        private siginCourseService: SigincourseService,// get data localstorage sigin
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
                this.router.navigate([`category-course/:${this.maDanhMuc}`])// chuyển trang
            }
        }, err => {
            alert(err.error)
        })
        this.sidenavClose.emit(); // đóng sidenav
    }
    // getUserNameSignIn show username after sigin
    getUserNameSignIn() {
        //  get data hoTen localStorage => core/service/signinCourse/signincouse.service.ts row 50
        this.siginCourseService.shareUserName.subscribe((data) => {
            this.userName = data;
        });
    }
    // (click)="infoUser()" row 30 di chuyển đến component infouser/infouser.component.ts
    infoUser() {
        this.router.navigate(['/infoUser']);
    }
    // (click)="logOutUser()" row 31  di chuyển đến signin
    // setSate taiKhoan => service/signinCourse/signincouse.service.ts row 71
    logOutUser() {
        this.loadingService.show()
        localStorage.clear()
        let taiKhoan = localStorage.removeItem('account')
        this.siginCourseService.setCurrentAccount(taiKhoan)
        this.userName = null
        setTimeout(() => {
            this.loadingService.hidden()
        }, 500);
        this.sidenavClose.emit();  // đóng sidenav
    }
    // call api tại setCurrentCourse header , khi search trên input (html row 34) sẽ filter ngay lập tức
    // getSearchCourse (call api)=> service/searchlistcourse/searchlistcourse.service row 48
    // setCurrentCourse save data =>  service/searchlistcourse/searchlistcourse.service row 34
    selectMaNhomSearch(maNhom: string) {
        this.maNhomForm = maNhom
        this.findlistcourseService.getSearchCourse(this.maNhomForm).subscribe(data => {
            this.findlistcourseService.setCurrentCourse(data)
        })
    }
    selectMaNhomSearchDefault() {
        this.maNhomForm = "GP01"
        this.findlistcourseService.getSearchCourse(this.maNhomForm).subscribe(data => {
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
        this.sidenavClose.emit();  // đóng sidenav
    }
    // sự kiện đóng các tác vụ sau click tại sideheader.component.html và đc truyền  đến client/client.component.html row 4
    onSidenavClose = () => {
        this.sidenavClose.emit();  // đóng sidenav
    };
}
