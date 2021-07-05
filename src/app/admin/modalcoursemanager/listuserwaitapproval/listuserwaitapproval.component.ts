import { Component, OnInit } from '@angular/core';
import { ListuserregistrationService } from '@service/modalCourseService/listUserRegistration/listuserregistration.service';
import { ShareinforegisteredService } from '@shared/shareData/shareInfoRegistered/shareinforegistered.service';
import { SharemodalcoursemanagerService } from '@shared/shareData/shareModalCourseManager/sharemodalcoursemanager.service';
import { ArrListUserRegistration, ListUerApproval, ListUerWaitApproval, RegisterCourse } from 'src/app/core/models/courseManager';

@Component({
  selector: 'app-listuserwaitapproval',
  templateUrl: './listuserwaitapproval.component.html',
  styleUrls: ['./listuserwaitapproval.component.scss']
})
export class ListuserwaitapprovalComponent implements OnInit {

  public maKhoaHocShowHTML: any; // show html
  public dataJson: any; // gán json

  public registerCourse!: RegisterCourse; // models call api;
  public listUerWaitApproval?: ListUerWaitApproval; // models call api;
  public arrListUserWaitApproval: ArrListUserRegistration[] = []; // models render html;
  public listUerApproval?: ListUerApproval; // models call api;

  constructor(
    private shareModalCoursemanagerService: SharemodalcoursemanagerService,
    private listUserRegistrationService: ListuserregistrationService,
    private shareInfoRegisteredService: ShareinforegisteredService,
  ) { }

  ngOnInit(): void {
    this.getListUserWaitApproval()
  }

  // sharemaKhoaHoc (get string maKhoaHoc) => shared/shareData/shareModalCourseManager/sharemodalcoursemanager.service row 24
  // postUserWaitApproval (post api) => service/modalCourseService/listUserRegistration/listuserregistration.service row 29
  getListUserWaitApproval() {
    this.shareModalCoursemanagerService.sharemaKhoaHoc.subscribe(data => {
      this.maKhoaHocShowHTML = data // show html
    })
    // spead operator => tính bất biến objet js
    let cloneObject = { ...this.listUerWaitApproval }
    cloneObject.maKhoaHoc = this.maKhoaHocShowHTML
    this.listUerWaitApproval = cloneObject

    this.listUserRegistrationService.postUserWaitApproval(this.listUerWaitApproval).subscribe(data => {
      this.dataJson = data
      this.arrListUserWaitApproval = JSON.parse(this.dataJson)
    })
  }
  // html => (keyup)="searchUser($event)"
  searchUser(event: any) {
    if (event.target.value !== "") {
      this.arrListUserWaitApproval = this.arrListUserWaitApproval.filter(item => item.taiKhoan.toLocaleLowerCase().match(event.target.value.toLocaleLowerCase()))
    } else if (event.target.value === "") {
      this.ngOnInit()
    }
  }

  // (click)="apProvalUser(user.taiKhoan ,maKhoaHocShowHTML )"
  // postApproval (post api) => service/modalCourseService/listUserRegistration/listuserregistration.service row 36
  apProvalUser(taiKhoan: string, maKhoaHocShowHTML: string) {
    // spead operator => tính bất biến objet js
    let updateRegisterCourse = { ...this.registerCourse }
    updateRegisterCourse.maKhoaHoc = maKhoaHocShowHTML
    updateRegisterCourse.taiKhoan = taiKhoan
    this.registerCourse = updateRegisterCourse

    this.listUserRegistrationService.postApproval(this.registerCourse).subscribe(data => {
      this.ngOnInit()
      this.setListUserApproval() // call api setstate ListuserapprovalComponent
    })
  }

  // (click)="cancelApproval(user.taiKhoan ,maKhoaHocShowHTML )
  // postCancelApproval (post api) => service/modalCourseService/listUserRegistration/listuserregistration.service row 43
  cancelApproval(taiKhoan: string, maKhoaHocShowHTML: string) {
    // spead operator => tính bất biến objet js
    let updateRegisterCourse = { ...this.registerCourse }
    updateRegisterCourse.maKhoaHoc = maKhoaHocShowHTML
    updateRegisterCourse.taiKhoan = taiKhoan
    this.registerCourse = updateRegisterCourse
    console.log(this.registerCourse);

    this.listUserRegistrationService.postCancelApproval(this.registerCourse).subscribe(data => {
      this.ngOnInit()
    })
  }

  // postUserApproval (post api) => service/modalCourseService/listUserRegistration/listuserregistration.service row 50
  setListUserApproval() {
    // spead operator => tính bất biến objet js
    let cloneObject = { ...this.listUerApproval }
    cloneObject.maKhoaHoc = this.maKhoaHocShowHTML
    this.listUerApproval = cloneObject
    this.listUserRegistrationService.postUserApproval(this.listUerApproval).subscribe(data => {
      this.dataJson = data
      // convert data json
      this.dataJson = JSON.parse(this.dataJson)
      // post data => shared/shareData/shareInfoRegistered/shareinforegistered.service row 25
      // (setstate) => ListuserapprovalComponent row 48
      this.shareInfoRegisteredService.setArrapProval(this.dataJson)
    })
  }

}
