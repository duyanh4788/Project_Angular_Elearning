import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShareupdatecourseService } from '@shared/shareData/shareUpdateCourse/shareupdatecourse.service';
import { UpdateCourse } from 'src/app/core/models/updateCourseManager';
import * as dayjs from 'dayjs'
import { UpdatecourseService } from '@service/upDateCourse/updatecourse.service';

@Component({
  selector: 'app-updatecoursemanager',
  templateUrl: './updatecoursemanager.component.html',
  styleUrls: ['./updatecoursemanager.component.scss']
})
export class UpdatecoursemanagerComponent implements OnInit {

  public updateCourse!: UpdateCourse // models/updateCourseManager

  public formUpdateCourse: any; // tag form any ?
  public dateForMats: any; // show date
  public imgShowLocal: any; // show img after choose

  constructor(
    private shareUpdateCourseService: ShareupdatecourseService,
    private updateCourseService: UpdatecourseService,
  ) { }

  public arrMaNhom: Array<any> = ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',];
  public danhMucKhoaHoc: Array<any> = [{ "maDanhMuc": "BackEnd", "tenDanhMuc": "Lập trình Backend" }, { "maDanhMuc": "Design", "tenDanhMuc": "Thiết kế Web" }, { "maDanhMuc": "DiDong", "tenDanhMuc": "Lập trình di động" }, { "maDanhMuc": "FrontEnd", "tenDanhMuc": "Lập trình Front end" }, { "maDanhMuc": "FullStack", "tenDanhMuc": "Lập trình Full Stack" }, { "maDanhMuc": "TuDuy", "tenDanhMuc": "Tư duy lập trình" }]

  ngOnInit(): void {
    this.getUpdateCourse()
    this.upadteFormCourse()
  }

  getUpdateCourse() {
    this.shareUpdateCourseService.shareUpdateCourse.subscribe(data => {
      this.updateCourse = data
    })
  }

  upadteFormCourse() {

    this.formUpdateCourse = new FormGroup({
      'maKhoaHoc': new FormControl(this.updateCourse.maKhoaHoc, [Validators.required]),
      'tenKhoaHoc': new FormControl(this.updateCourse.tenKhoaHoc, [Validators.required]),
      'moTa': new FormControl(this.updateCourse.moTa, [Validators.required]),
      'luotXem': new FormControl(this.updateCourse.luotXem, [Validators.required]),
      'hinhAnh': new FormControl(this.updateCourse.hinhAnh, [Validators.required]),
      'maNhom': new FormControl(this.updateCourse.maNhom, [Validators.required]),
      'ngayTao': new FormControl(this.updateCourse.ngayTao, [Validators.required]),
      'danhGia': new FormControl(this.updateCourse.danhGia, [Validators.required]),
      'taiKhoanNguoiTao': new FormControl(this.updateCourse.nguoiTao?.taiKhoan, [Validators.required]),
      'maDanhMucKhoaHoc': new FormControl(this.updateCourse.danhMucKhoaHoc?.maDanhMucKhoahoc, [Validators.required]),
    })
  }

  getFileImage(event: any) {
    let target = event.target.files[0]
    let cloneObject = { ...this.updateCourse }
    if (target) {
      const reader = new FileReader();
      reader.onload = e => this.imgShowLocal = reader.result;
      reader.readAsDataURL(target);
    }
    cloneObject.hinhAnh = target
    this.updateCourse = cloneObject
  }

  getDateForMat(event: any) {
    let dateFormat = dayjs(event.target.value).format('DD/MM/YYYY') // convert date
    this.updateCourse.ngayTao = dateFormat
  }

  handleUpdateCourse() {
    this.formUpdateCourse.value.ngayTao = this.updateCourse.ngayTao
    this.formUpdateCourse.value.hinhAnh = this.updateCourse.hinhAnh
    console.log(this.formUpdateCourse.value);
    let formData = new FormData()
    for (let key in this.formUpdateCourse.value) {
      formData.append(key, this.formUpdateCourse.value[key])
    }
    this.updateCourseService.postUpdateCourse(formData).subscribe(data => {
      console.log(data);
    })

  }
}
