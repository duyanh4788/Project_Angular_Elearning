import { Component, Inject, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditusermanagerService } from '@service/modalUserService/editUserManager/editusermanager.service';
import { SharemodalusermanagerService } from '@shared/shareData/shareModalUserManager/sharemodalusermanager.service';
import { UpdatetUserManager } from 'src/app/core/models/client';
import { UserManagementComponent } from '../../user-management/user-management.component';
import ValidationMatchPass from './validationMatch';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})

export class UpdateuserComponent implements OnInit {

  public listUser!: UpdatetUserManager; // model
  public maNguoiDung: string = "" // get value maNguoiDung html
  public maNhom: string = "" // get value maNhom
  formEditUser: any; // tag form any ?

  public arrMaNhom: Array<any> = [// arr maNhom render html
    "GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07", "GP08", "GP09", "GP10",
  ]

  constructor(@Inject(MAT_DIALOG_DATA) public userManagementComponent: UserManagementComponent,
    private shareModalUserManagerService: SharemodalusermanagerService,
    private editUserManagerService: EditusermanagerService,
    private modalDetail: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getInforUsers()// call service render form edit
    this.editFormInforUser() // tag form
  }

  // shareModalUser => get data object => shared/shareData/shareModalUserManager/sharemodalusermanager.service
  // shareModalMaNhom => get maNhom => shared/shareData/shareModalUserManager/sharemodalusermanager.service
  getInforUsers() {
    this.shareModalUserManagerService.shareModalUser.subscribe(data => {
      this.listUser = data // render html form
    })
    this.shareModalUserManagerService.shareModalMaNhom.subscribe(data => {
      this.maNhom = data
    })
  }

  // code render html (!validator)
  editFormInforUser() {
    // g??n maNhom ???? l??u tai UserManagementComponent render html
    this.listUser.maNhom = this.maNhom
    this.formEditUser = new FormGroup({
      'taiKhoan': new FormControl(this.listUser.taiKhoan, [Validators.required]),
      'hoTen': new FormControl(this.listUser.hoTen, [Validators.required]),
      'matKhau': new FormControl(this.listUser.matKhau),
      'conFirmMatKhau': new FormControl(null),
      'email': new FormControl(this.listUser.email, [Validators.required]),
      'maNhom': new FormControl(this.listUser.maNhom, [Validators.required]),
      'soDT': new FormControl(this.listUser.soDt, [Validators.required]),
      'maLoaiNguoiDung': new FormControl(this.listUser.maLoaiNguoiDung),
    }, {
      // ValidationMatchPass => import ./validationMatch.ts
      validators: [ValidationMatchPass.match('matKhau', 'conFirmMatKhau')]
    })
  }

  // change getMaNguoiDung(event: any) html
  getMaNguoiDung(event: any) {
    this.maNguoiDung = event.target.value
  }

  // putApiService => put service/editUserManager/editusermanager.service
  handleEditInfoUser() {
    // code logic m???c ?????nh input radio ko c?? value , ch??? show value radio ???????c g??n t??? gi?? tr??? call service
    // n???u this.maNguoiDung = "" l???y value t??? getMaNguoiDung , ho???c != "" l???y gi?? tr??? form g??n l???i this.maNguoiDung
    // sau khi edit success t??? ?????ng render html t???i user-manager.html do ?
    if (this.maNguoiDung === "") {
      this.maNguoiDung = this.formEditUser.value.maLoaiNguoiDung
    }
    this.formEditUser.value.maLoaiNguoiDung = this.maNguoiDung
    this.editUserManagerService.putEditService(this.formEditUser.value).subscribe(data => {
      console.log(data);
      this.listUser.email = this.formEditUser.value.email
      this.listUser.hoTen = this.formEditUser.value.hoTen;
      this.listUser.maLoaiNguoiDung = this.formEditUser.value.maLoaiNguoiDung;
      this.listUser.maNhom = this.formEditUser.value.maNhom;
      this.listUser.soDt = this.formEditUser.value.soDT;
      this.listUser.taiKhoan = this.formEditUser.value.taiKhoan;
    })
    this.modalDetail.closeAll()
  }

}
