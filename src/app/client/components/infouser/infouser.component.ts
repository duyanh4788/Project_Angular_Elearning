import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigincourseService } from '@service/signinCourse/sigincourse.service';
import { UnsubscribecourseService } from '@service/unsubscribeCourse/unsubscribecourse.service';
import { SharemodalinfouserService } from '@shared/shareData/shareModalInfoUser/sharemodalinfouser.service';
import { InforUser, UnSubsCribeCouse } from 'src/app/core/models/inforUser';
import { InforuserService } from 'src/app/core/services/inforuser/inforuser.service';
import { ModalinfouserComponent } from '../modalinfouser/modalinfouser.component';

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.component.html',
  styleUrls: ['./infouser.component.scss'],
})
export class InfouserComponent implements OnInit {
  public infoUsers?: InforUser; //InforUser model taọ từ /models/inforUser.ts row 1
  private infoUnSubrice?: UnSubsCribeCouse; //UnSubsCribeCouse model taọ từ /models/inforUser.ts row 18
  public taiKhoan: string = '';// dùng để huỷ đăng ký
  public chiTietKH: Array<any> = []; // show chi tiết khoá học

  constructor(
    private inforuserService: InforuserService,
    private siginCourseService: SigincourseService,
    private unSubscribecourseService: UnsubscribecourseService,
    private modalInfoUer: MatDialog,
    private shareModalinfouserService: SharemodalinfouserService
  ) { }

  ngOnInit(): void {
    this.getInfoUsers();
  }

  // getInfoUserService => post api core/services/infoUser/inforuser.service.ts row 16
  // post & get data khi edit thông tin render html core/services/infoUser/inforuser.service.ts
  // (accessToken) => service/signinCourse/sigincourse.service 
  getInfoUsers() {
    let accessToken = this.siginCourseService.getCurrentToken();
    console.log(accessToken);
    
    this.inforuserService
      .getInfoUserService(accessToken)
      .subscribe((data) => {
        const { chiTietKhoaHocGhiDanh, ...infoUser } = data
        this.inforuserService.setInforUser(infoUser)// post data
        this.chiTietKH = chiTietKhoaHocGhiDanh;// show chi tiết kh html
        this.taiKhoan = data.taiKhoan; // taiKhoan dùng unSubsCribeCouse
        this.infoUsers = this.inforuserService.getInforUser(); // get data
      });
  }

  // (click)="unSubsCribeCouse(course.maKhoaHoc) html 21
  // unSubsCribeCouseService post => service/unsubscribeCourse/unsubscribecourse.service'
  unSubsCribeCouse(maKhoaHoc: string) {
    let infoUnSubriceUpdate = { ...this.infoUnSubrice };
    infoUnSubriceUpdate.taiKhoan = this.taiKhoan;
    infoUnSubriceUpdate.maKhoaHoc = maKhoaHoc;
    this.unSubscribecourseService
      .unSubsCribeCouseService(infoUnSubriceUpdate)
      .subscribe((data) => {
        // code logic render danh sách khoá học html sau khi huỷ đăng ký
        let chiTietKhUpdate = [...this.chiTietKH];
        let index = chiTietKhUpdate.findIndex(
          (item) => item.maKhoaHoc === maKhoaHoc
        );
        chiTietKhUpdate.splice(index, 1);
        this.chiTietKH = chiTietKhUpdate;
      });
  }

  // (keyup)="searchKhoaHoc($event) html
  searchKhoaHoc(event: any) {
    // code logic search => render
    if (event.target.value !== '') {
      this.chiTietKH = this.chiTietKH.filter((item) => {
        return item.maKhoaHoc
          .toLocaleLowerCase()
          .match(event.target.value.toLocaleLowerCase());
      });
    } else {
      this.ngOnInit();
    }
  }

  // modal (click)="getDetailUser(infoUsers)" => modalinfouser/modalinfouser.component
  // infoUsers => object infoUsers html
  // getModalInfoUser post data => shared/shareData/shareModalInfoUser/sharemodalinfouser.service';
  getDetailUser(infoUsers: object) {
    console.log(infoUsers);
    this.shareModalinfouserService.getModalInfoUser(infoUsers)
    this.modalInfoUer.open(ModalinfouserComponent); // mở modal
  }
}
