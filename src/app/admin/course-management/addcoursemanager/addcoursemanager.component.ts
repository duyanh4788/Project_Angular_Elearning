import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddcourseService } from '@service/addCourse/addcourse.service';
import { SigincourseService } from '@service/signinCourse/sigincourse.service';
import * as dayjs from 'dayjs'

@Component({
  selector: 'app-addcoursemanager',
  templateUrl: './addcoursemanager.component.html',
  styleUrls: ['./addcoursemanager.component.scss']
})
export class AddcoursemanagerComponent implements OnInit {
  @ViewChild('formAddCoure') formAddCoure!: NgForm // data form

  public maNhom: string = ""; // get maNhom
  public maDanhMuc: string = ""; // get maDanhMuc
  public taiKhoan: any;// get taiKhoan & show html
  public hinhAnh: any;// get taiKhoan
  public ngayTao: any;// get taiKhoan
  public imgShowLocal: any; // show img after choose

  public arrMaNhom: Array<any> = ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',];
  public danhMucKhoaHoc: Array<any> = ["BackEnd", "Design", "DiDong", "FrontEnd", "FullStack", "TuDuy"]

  constructor(private addCourseService: AddcourseService, private siginCourseService: SigincourseService) { }

  ngOnInit(): void {
    this.getUserName()
  }
  
  // shareAccount (get taiKhoan) => service/signinCourse/sigincourse.service
  getUserName() {
    this.siginCourseService.shareAccount.subscribe(data => {
      this.taiKhoan = data
    })
  }

  // (click)="getMaNhom(ma)" html
  getMaNhom(maNhom: string) {
    this.maNhom = maNhom
  }

  // (click)="getDanhMuc(danhMuc)" html
  getDanhMuc(maDanhMuc: string) {
    this.maDanhMuc = maDanhMuc
  }

  // (dateChange)="getDateForMat($event)" html
  getDateForMat(event: any) {
    this.ngayTao = dayjs(event.target.value).format('DD/MM/YYYY') // convert date
  }

  // (change)="getFileImage($event)" html
  // lấy object[0] để post api
  getFileImage(event: any) {
    let target = event.target.files[0]
    if (target) {
      const reader = new FileReader();
      reader.onload = e => this.imgShowLocal = reader.result;
      reader.readAsDataURL(target);
    }
    this.hinhAnh = target
  }

  // (ngSubmit)="handleAddCourse()" html
  // postDataCourse (post data api) => @service/addCourse/addcourse.service
  handleAddCourse() {
    this.formAddCoure.value.hinhAnh = this.hinhAnh
    this.formAddCoure.value.ngayTao = this.ngayTao
    this.formAddCoure.value.taiKhoanNguoiTao = this.taiKhoan
    let formData = new FormData();
    for (let key in this.formAddCoure.value) {
      formData.append(key, this.formAddCoure.value[key])
    }
    this.addCourseService.postDataCourse(formData).subscribe(data => {
      console.log(data);
    })
  }
  // api postDataCourse yêu cầu gửi lên hinhAnh là 1 object và style FormData ( bảo mật )
  // https://www.youtube.com/watch?v=uOiX5nvA8_Y&t=113s
}

