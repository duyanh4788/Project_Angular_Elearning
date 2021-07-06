import { Component, OnInit } from '@angular/core';
import { ListcoursemanagerService } from '@service/courseManagerService/listCourseManager/listcoursemanager.service';
import { InforuserService } from '@service/inforuser/inforuser.service';
import { SigincourseService } from '@service/signinCourse/sigincourse.service';
import { ListuserService } from '@service/userManagerService/listUser/listuser.service';
import { Subscription } from 'rxjs';
import { InforUser } from 'src/app/core/models/inforUser';

@Component({
  selector: 'app-infoadmin',
  templateUrl: './infoadmin.component.html',
  styleUrls: ['./infoadmin.component.scss']
})

export class InfoadminComponent implements OnInit {

  public infoUsers?: InforUser; //InforUser model taọ từ /models/inforUser.ts row 1
  public maNhom: string = "" // get value maNhom
  public numberUser: number = 0; // show html
  public numberCourse: number = 0;// show html

  arrMaNhom: Array<any> = ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',]; // arr maNhom

  constructor(
    private siginCourseService: SigincourseService,
    private inforuserService: InforuserService,
    private listuserService: ListuserService,
    private listCourseManagerService: ListcoursemanagerService,

  ) { }

  private subscription = new Subscription(); // huỷ call api nếu ko thành công

  ngOnInit(): void {
    this.getInfoAdmin()
    this.selectGroupDefault();// call api load page
  }

  // getInfoUserService => post api core/services/infoUser/inforuser.service.ts row 16
  // post & get data khi edit thông tin render html core/services/infoUser/inforuser.service.ts
  // (userSignIn token) => service/signinCourse/sigincourse.service
  getInfoAdmin() {
    let userSignIn = this.siginCourseService.getCurrentUser();
    this.inforuserService
      .getInfoUserService(userSignIn.accessToken)
      .subscribe((data) => {
        const { chiTietKhoaHocGhiDanh, ...infoUser } = data
        this.inforuserService.setInforUser(infoUser)// post data
        this.infoUsers = this.inforuserService.getInforUser(); // get data
      });
  }

  // GetListUser => phương thức get taọ từ services/getlistuser.service.ts row 15
  // maNhom => lấy từ (click)="selectGroup(ma)" => user-management.component.html
  selectGroup(maNhom: string) {
    this.maNhom = maNhom
    this.subscription.add(this.listuserService.getListUser(maNhom).subscribe((data) => {
      this.numberUser = data.length
    }))
    this.listCourseManagerService.getListCourseManagerPage(maNhom).subscribe(data => {
      this.numberCourse = data.length
    })
  }
  // lấy danh sách mã nhóm GP01 mặc định khi hiển thị lần đầu
  selectGroupDefault() {
    this.maNhom = 'GP01'
    this.listuserService.getListUser(this.maNhom).subscribe((data) => {
      this.numberUser = data.length
    });
    this.listCourseManagerService.getListCourseManagerPage(this.maNhom).subscribe(data => {
      this.numberCourse = data.length
    })
  }

}
