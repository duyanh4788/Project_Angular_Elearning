import { Component, OnInit } from '@angular/core';
import { ListuserregistrationService } from '@service/modalCourseService/listUserRegistration/listuserregistration.service';
import { ShareinforegisteredService } from '@shared/shareData/shareInfoRegistered/shareinforegistered.service';
import { SharemodalcoursemanagerService } from '@shared/shareData/shareModalCourseManager/sharemodalcoursemanager.service';
import { ArrListUserRegistration, ListUerApproval, RegisterCourse } from 'src/app/core/models/courseManager';

@Component({
  selector: 'app-listuserapproval',
  templateUrl: './listuserapproval.component.html',
  styleUrls: ['./listuserapproval.component.scss']
})
export class ListuserapprovalComponent implements OnInit {

  public dataJson: any; // gán json
  public maKhoaHocShowHTML: any; // show html

  public registerCourse!: RegisterCourse; // models call api;
  public listUerApproval?: ListUerApproval; // models call api;

  public arrlistUserRegistration: ArrListUserRegistration[] = []; // models render html;

  constructor(
    private shareModalCoursemanagerService: SharemodalcoursemanagerService,
    private listUserRegistrationService: ListuserregistrationService,
    private shareInfoRegisteredService: ShareinforegisteredService,
  ) { }

  ngOnInit(): void {
    this.getListUserApproval()//Học Viên Đã Tham Gia Khoá Học
  }

  // sharemaKhoaHoc (get string maKhoaHoc) => shared/shareData/shareModalCourseManager/sharemodalcoursemanager.service row 24
  // postUserApproval (post api) => service/modalCourseService/listUserRegistration/listuserregistration.service row 51
  getListUserApproval() {
    this.shareModalCoursemanagerService.sharemaKhoaHoc.subscribe(data => {
      this.maKhoaHocShowHTML = data // show html
    })
    // spead operator => tính bất biến objet js
    let cloneObject = { ...this.listUerApproval }
    cloneObject.maKhoaHoc = this.maKhoaHocShowHTML
    this.listUerApproval = cloneObject

    this.listUserRegistrationService.postUserApproval(this.listUerApproval).subscribe(data => {
      this.dataJson = data
      this.dataJson = JSON.parse(this.dataJson)
      // post data => shared/shareData/shareInfoRegistered/shareinforegistered.service row 25
      // setstate => ListuserwaitapprovalComponent row 98
      this.shareInfoRegisteredService.setArrapProval(this.dataJson)
    })
    // get data => shared/shareData/shareInfoRegistered/shareinforegistered.service row 22
    this.shareInfoRegisteredService.shareCurrentArrapProval.subscribe(data => {
      this.arrlistUserRegistration = data
    })
  }

  // html => (keyup)="searchUser($event)"
  searchUser(event: any) {
    if (event.target.value !== "") {
      this.arrlistUserRegistration = this.arrlistUserRegistration.filter(item => item.taiKhoan.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
    } else if (event.target.value === "") {
      this.ngOnInit()
    }
  }

  // (click)="cancelApproval(user.taiKhoan ,maKhoaHocShowHTML ) html
  // postCancelApproval (post api) => service/modalCourseService/listUserRegistration/listuserregistration.service row 43
  cancelApproval(taiKhoan: string, maKhoaHocShowHTML: string) {
    // spead operator => tính bất biến objet js
    let updateRegisterCourse = { ...this.registerCourse }
    updateRegisterCourse.maKhoaHoc = maKhoaHocShowHTML
    updateRegisterCourse.taiKhoan = taiKhoan
    this.registerCourse = updateRegisterCourse

    this.listUserRegistrationService.postCancelApproval(this.registerCourse).subscribe(data => {
      this.ngOnInit()
      this.setListUserUnRegister() // call api setState ListuserunregisterdComponent
    })
  }

  // postListUserRegister (post api) => service/modalCourseService/listUserRegistration/listuserregistration.service row 15
  setListUserUnRegister() {
    this.shareModalCoursemanagerService.shareModalCourse.subscribe(objectMaKhoaHoc => {
      this.listUserRegistrationService.postListUserRegister(objectMaKhoaHoc).subscribe(data => {
        // assign data
        this.dataJson = data
        // convert Json data
        this.dataJson = JSON.parse(this.dataJson)
        // post data => shared/shareData/shareInfoRegistered/shareinforegistered.service row 16
        // (setstate) => ListuserunregisterdComponent row 43
        this.shareInfoRegisteredService.setArrListCurrentUser(this.dataJson)
      })
    })
  }

}
