import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddcourseService } from '@service/addCourse/addcourse.service';
import { AddCourse } from 'src/app/core/models/addCourse';
import { SigincourseService } from '@service/signinCourse/sigincourse.service';
import * as dayjs from 'dayjs'

@Component({
  selector: 'app-addcoursemanager',
  templateUrl: './addcoursemanager.component.html',
  styleUrls: ['./addcoursemanager.component.scss']
})
export class AddcoursemanagerComponent implements OnInit {
  @ViewChild('formAddCoure') formAddCoure!: NgForm // data form

  public dataCourse!: AddCourse; // models/addCourse
  public maNhom: string = ""; // get maNhom
  public maDanhMuc: string = ""; // get maDanhMuc
  public object: any;// get taiKhoanNguoiTao

  public arrMaNhom: Array<any> = ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',];
  public danhMucKhoaHoc: Array<any> = ["BackEnd", "Design", "DiDong", "FrontEnd", "FullStack", "TuDuy"]

  constructor(private addCourseService: AddcourseService, private siginCourseService: SigincourseService) { }

  ngOnInit(): void {
    this.getUserName() // get taiKhoan show html
  }
  // currentUser get object user => service/signinCourse/sigincourse.service
  getUserName() {
    this.siginCourseService.currentUser.subscribe(data => {
      this.object = data
      let cloneUpdate = { ...this.dataCourse }
      cloneUpdate.taiKhoanNguoiTao = this.object.taiKhoan
      this.dataCourse = cloneUpdate
    })
  }
  //  (click)="getMaNhom(ma)" html
  getMaNhom(maNhom: string) {
    this.maNhom = maNhom
  }
  //  (click)="getDanhMuc(danhMuc)" html
  getDanhMuc(maDanhMuc: string) {
    this.maDanhMuc = maDanhMuc
  }
  // (dateChange)="getDateForMat($event)" html
  getDateForMat(event: any) {
    let dateFormat = dayjs(event.target.value).format('DD/MM/YYYY') // convert date
    let update = { ...this.dataCourse }
    update.ngayTao = dateFormat
    this.dataCourse = update
  }
  public imgShowLocal: any; // show img after choose
  // (change)="getFileImage($event)" html
  // lấy object[0] để post api
  getFileImage(event: any) {
    let target = event.target.files[0]
    let cloneObject = { ...this.dataCourse }
    if (target) {
      const reader = new FileReader();
      reader.onload = e => this.imgShowLocal = reader.result;
      reader.readAsDataURL(target);
    }
    cloneObject.hinhAnh = target
    this.dataCourse = cloneObject
  }

  // (ngSubmit)="handleAddCourse()" html
  // postDataCourse (post data api) => @service/addCourse/addcourse.service
  handleAddCourse() {
    this.formAddCoure.value.hinhAnh = this.dataCourse.hinhAnh
    this.formAddCoure.value.ngayTao = this.dataCourse.ngayTao
    this.formAddCoure.value.taiKhoanNguoiTao = this.dataCourse.taiKhoanNguoiTao
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

