import { Component, OnInit } from '@angular/core';
import { ListcourseregistrationService } from '@service/modalUserService/listCourseRegistration/listCourseregistration.service';
import { SharemodalusermanagerService } from '@shared/shareData/shareModalUserManager/sharemodalusermanager.service';
import { UserRegister } from 'src/app/core/models/client';
import { ListCouseRegisteds, ListCouseUnRegisteds, ListWaitApproval, ThongTinGhiDanh } from 'src/app/core/models/listCourseUnRegisted';

@Component({
  selector: 'app-courseregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.scss']
})

export class UserregisterComponent implements OnInit {

  panelOpenState = false; // material open expansion

  public listUser!: UserRegister; // model dùng call api
  public listCourseUnregisted: ListCouseUnRegisteds[] = []; // model render html
  public listCourseRegisted: ListCouseRegisteds[] = []; // model render html
  public listWaitApproval: ListWaitApproval[] = []; // model render html
  public thongTinGhiDanh: ThongTinGhiDanh = {}; // model dùng call api

  public _dataUnregisted: any; // gán json
  public _dataregisted: any; // gán json
  public taiKhoan: any; // show html

  constructor(private shareModalusermanagerService: SharemodalusermanagerService, private listCourseRegistrationService: ListcourseregistrationService) { }

  ngOnInit(): void {
    this.getListCourseUnRegistered()
  }

  // call api get data render html
  getListCourseUnRegistered() {
    // shareModalUser => shared/shareData/shareModalUserManager/sharemodalusermanager.service
    // postListCourseUnRegister & postListCourseRegister & postListCourseWaitApproval service/listCourseRegistration/listCourseregistration.service
    this.shareModalusermanagerService.shareModalUser.subscribe(data => {
      this.listUser = data;
      // ChuaGhiDanh
      this.listCourseRegistrationService.postListCourseUnRegister(this.listUser.taiKhoan).subscribe(data => {
        this._dataUnregisted = data
        this.listCourseUnregisted = JSON.parse(this._dataUnregisted)
      })
      const { email, hoTen, maLoaiNguoiDung, maNhom, soDt, ..._taiKhoan } = this.listUser
      this.taiKhoan = _taiKhoan.taiKhoan
      // DaXetDuyet
      this.listCourseRegistrationService.postListCourseRegister(_taiKhoan).subscribe(data => {
        this._dataregisted = data
        this.listCourseRegisted = JSON.parse(this._dataregisted)
      })
      // daDangKy
      this.listCourseRegistrationService.postListCourseWaitApproval(_taiKhoan).subscribe(data => {
        this._dataregisted = data
        this.listWaitApproval = JSON.parse(this._dataregisted)
      })
    })
  }


  // (click)="registedCourse(course)"
  registedCourse(course: any) {
    const { maKhoaHoc, ..._course } = course
    const { taiKhoan, ..._taiKhoan } = this.listUser
    this.thongTinGhiDanh.taiKhoan = taiKhoan
    this.thongTinGhiDanh.maKhoaHoc = maKhoaHoc
    // post ghi danh course => service/listCourseRegistration/listCourseregistration.service
    this.listCourseRegistrationService.postRegistedCourse(this.thongTinGhiDanh).subscribe(data => {
      console.log(data);
      this.ngOnInit()
    })
  }

  // (click)="cancelRegistedCourse(course)"
  cancelRegistedCourse(course: any) {
    const { maKhoaHoc, ..._course } = course
    const { taiKhoan, ..._taiKhoan } = this.listUser
    this.thongTinGhiDanh.taiKhoan = taiKhoan
    this.thongTinGhiDanh.maKhoaHoc = maKhoaHoc
    // post huỹ ghi danh course => service/listCourseRegistration/listCourseregistration.service
    this.listCourseRegistrationService.postCancelRegistedCourse(this.thongTinGhiDanh).subscribe(data => {
      console.log(data);
      this.ngOnInit()
    })
  }

}
