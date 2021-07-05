import { Component, OnInit } from '@angular/core';
import { ListuserregistrationService } from '@service/modalCourseService/listUserRegistration/listuserregistration.service';
import { ShareinforegisteredService } from '@shared/shareData/shareInfoRegistered/shareinforegistered.service';
import { SharemodalcoursemanagerService } from '@shared/shareData/shareModalCourseManager/sharemodalcoursemanager.service';
import { ArrListUserRegistration, ListUerApproval, RegisterCourse } from 'src/app/core/models/courseManager';

@Component({
  selector: 'app-listuserunregisterd',
  templateUrl: './listuserunregisterd.component.html',
  styleUrls: ['./listuserunregisterd.component.scss']
})

export class ListuserunregisterdComponent implements OnInit {

  public maKhoaHocShowHTML: any; // show html
  public dataJson: any; // gán json

  public arrlistUserRegistration: ArrListUserRegistration[] = []; // model render html
  public registerCourse!: RegisterCourse; // models call api
  public listUerApproval?: ListUerApproval; // models call api;

  constructor(
    private shareModalCoursemanagerService: SharemodalcoursemanagerService,
    private listUserRegistrationService: ListuserregistrationService,
    private shareInfoRegisteredService: ShareinforegisteredService,
  ) { }

  ngOnInit(): void {
    this.getListUserUnRegister()
  }

  // shareModalCourse (get object) => shared/shareData/shareModalCourseManager/sharemodalcoursemanager.service row 15
  // sharemaKhoaHoc (get string) => shared/shareData/shareModalCourseManager/sharemodalcoursemanager.service row 22
  // postListUserRegister (post api) => service/modalCourseService/listUserRegistration/listuserregistration.service row 15
  getListUserUnRegister() {
    this.shareModalCoursemanagerService.shareModalCourse.subscribe(objectMaKhoaHoc => {
      this.listUserRegistrationService.postListUserRegister(objectMaKhoaHoc).subscribe(data => {
        // assign data
        this.dataJson = data
        // convert Json data
        this.dataJson = JSON.parse(this.dataJson)
        // post data => shared/shareData/shareInfoRegistered/shareinforegistered.service row 17
        this.shareInfoRegisteredService.setArrListCurrentUser(this.dataJson)
      })
    })
    // get data => shared/shareData/shareInfoRegistered/shareinforegistered.service row 14
    this.shareInfoRegisteredService.shareCurrentArrListUser.subscribe(data => {
      this.arrlistUserRegistration = data
    })
    // show maKhoaHoc html
    this.shareModalCoursemanagerService.sharemaKhoaHoc.subscribe(data => {
      this.maKhoaHocShowHTML = data
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
  // html => (click)="registeredCourse(user.taiKhoan ,maKhoaHocShowHTML )
  // postRegisteredCourse (post api) => service/modalCourseService/listUserRegistration/listuserregistration.service row 22
  registeredCourse(taiKhoan: string, maKhoaHocShowHTML: string) {
    // spead operator => tính bất biến objet js
    let updateRegisterCourse = { ...this.registerCourse }
    updateRegisterCourse.maKhoaHoc = maKhoaHocShowHTML
    updateRegisterCourse.taiKhoan = taiKhoan
    this.registerCourse = updateRegisterCourse

    this.listUserRegistrationService.postRegisteredCourse(this.registerCourse).subscribe(data => {
      this.ngOnInit()
      this.getListUserApproval() // call api setstate ListuserapprovalComponent
    })
  }

  // postUserApproval (post api) => service/modalCourseService/listUserRegistration/listuserregistration.service row 51
  getListUserApproval() {
    // spead operator => tính bất biến objet js
    let cloneObject = { ...this.listUerApproval }
    cloneObject.maKhoaHoc = this.maKhoaHocShowHTML
    this.listUerApproval = cloneObject

    this.listUserRegistrationService.postUserApproval(this.listUerApproval).subscribe(data => {
      this.dataJson = data
      this.dataJson = JSON.parse(this.dataJson)
      // post data => shared/shareData/shareInfoRegistered/shareinforegistered.service row 30
      // (setstate) => ListuserapprovalComponent row 48
      this.shareInfoRegisteredService.setArrapProval(this.dataJson)
    })
  }

}
