import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditinfouserService } from '@service/editInfoUser/editinfouser.service';
import { InforuserService } from '@service/inforuser/inforuser.service';
import { SigincourseService } from '@service/signinCourse/sigincourse.service';
import { SharemodalinfouserService } from '@shared/shareData/shareModalInfoUser/sharemodalinfouser.service';
import { EditUser } from 'src/app/core/models/inforUser';
import { InfouserComponent } from '../infouser/infouser.component';

@Component({
  selector: 'app-modalinfouser',
  templateUrl: './modalinfouser.component.html',
  styleUrls: ['./modalinfouser.component.scss']
})


export class ModalinfouserComponent implements OnInit {

  public inFoUser!: EditUser; //InforUser model taọ từ /models/inforUser.ts row 27
  formEdit: any; // tag form any ?

  public arrMaNhom: Array<any> = [
    "GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07", "GP08", "GP09", "GP10",
  ]

  constructor(@Inject(MAT_DIALOG_DATA) public infouserComponent: InfouserComponent,
    private sharemodalinfouserService: SharemodalinfouserService,
    private editInfouserService: EditinfouserService,
    private modalInfoUer: MatDialog,
    private inforuserService: InforuserService,
    private siginCourseService: SigincourseService,
  ) { }

  ngOnInit(): void {
    this.getInfoUser()
    this.editFormInforUser()
  }

  // get data => shared/shareData/shareModalInfoUser/sharemodalinfouser.service
  getInfoUser() {
    this.sharemodalinfouserService.shareModalInfoUser.subscribe(data => {
      this.inFoUser = data // render form edit
    })
  }
  // code get data form edit html not done validator
  editFormInforUser() {
    this.formEdit = new FormGroup({
      'taiKhoan': new FormControl(this.inFoUser.taiKhoan, [Validators.required, Validators.pattern('[A-Za-z0-9]+')]),
      'matKhau': new FormControl(this.inFoUser.matKhau, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      'hoTen': new FormControl(this.inFoUser.hoTen, [Validators.required]),
      'maNhom': new FormControl(this.inFoUser.maNhom, [Validators.required]),
      'email': new FormControl(this.inFoUser.email, [Validators.required]),
      'soDT': new FormControl(this.inFoUser.soDT, [Validators.required]),
      'maLoaiNguoiDung': new FormControl(this.inFoUser.maLoaiNguoiDung),
    })
  }
  // (ngSubmit)="handleEditInfoUser()
  // putInfoUser put api service/editInfoUser/editinfouser.service'
  // setInforUser post data service/inforuser/inforuser.service khi update form => render html
  handleEditInfoUser() {
    this.editInfouserService.putInfoUser(this.formEdit.value).subscribe(data => {
      this.inFoUser.email = this.formEdit.value.email
      this.inFoUser.hoTen = this.formEdit.value.hoTen;
      this.inFoUser.maLoaiNguoiDung = this.formEdit.value.maLoaiNguoiDung;
      this.inFoUser.maNhom = this.formEdit.value.maNhom;
      this.inFoUser.matKhau = this.formEdit.value.matKhau;
      this.inFoUser.soDT = this.formEdit.value.soDT;
      this.inFoUser.taiKhoan = this.formEdit.value.taiKhoan;
      console.log(data);
      // setstate info user => InfouserComponent
      this.inforuserService.setInforUser(this.inFoUser)
      // setstate hoTen showname header * sidehedader => service/signinCourse/sigincourse.service
      this.siginCourseService.setCurrentUserName(this.inFoUser.hoTen)
    })
    this.modalInfoUer.closeAll() // colse modal
  }
}
