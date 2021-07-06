import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeletecourseService } from '@service/courseManagerService/deleteCourseManager/deletecourse.service';
import { ListcoursemanagerService } from '@service/courseManagerService/listCourseManager/listcoursemanager.service';
import { SharemodalcoursemanagerService } from '@shared/shareData/shareModalCourseManager/sharemodalcoursemanager.service';
import { ShareupdatecourseService } from '@shared/shareData/shareUpdateCourse/shareupdatecourse.service';
import { CourseManager, InfoCourse } from 'src/app/core/models/courseManager';
import { ModalcoursemanagerComponent } from '../modalcoursemanager/modalcoursemanager.component';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {

  public infoCourse!: InfoCourse;// models/courseManager
  public listCoursePage!: CourseManager[]; // array render html

  constructor(
    private listCourseManagerService: ListcoursemanagerService,
    private deleteCourseService: DeletecourseService,
    private shareModalCourseManagerService: SharemodalcoursemanagerService,
    private modalCourse: MatDialog,
    public router: Router,
    public shareUpdateCourseService: ShareupdatecourseService,
  ) { }

  displayedColumns: string[] = ['stt', 'maKH', 'tenKH', 'danhMucKH', 'hinhAnh', 'delete', 'setting', 'editcourse']; // table
  arrMaNhom: Array<any> = ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',];

  ngOnInit(): void {
    this.selectGroupDefault()//render html GP01
  }

  // get data => service/listCourseManager/listCourseManager.service
  selectGroup(maNhom: string) {
    this.listCourseManagerService.getListCourseManagerPage(maNhom).subscribe(data => {
      this.listCoursePage = data
    }, err => {
      alert(err.error)
    })
  }
  // + lấy danh sách mã nhóm GP01 mặc định khi hiển thị lần đầu
  selectGroupDefault() {
    let maNhom = 'GP01'
    this.listCourseManagerService.getListCourseManagerPage(maNhom).subscribe(data => {
      this.listCoursePage = data
    })
  }

  // deleteApi => service/courseManagerService/deleteCourseManager/deletecourse.service
  // maNhom => (click)="deleteCourse(course.maKhoaHoc)" html
  // code logic clone this.listCoursePage => xoá ok remove item & render html
  deleteCourse(maKhoaHoc: string) {
    this.deleteCourseService.deleteCourseManagerPage(maKhoaHoc).subscribe(data => {
      let cloneArray = [...this.listCoursePage]
      let index = cloneArray.findIndex(item => item.maKhoaHoc === maKhoaHoc)
      cloneArray.splice(index, 1)
      this.listCoursePage = cloneArray
    })
  }

  //(click)="editCourse(course)" course == object
  // gán obvject this.infoCourse = data => ListuserunregisterdComponent mới nhận đc giá trị
  // getModalCourse => post object maKhoaHoc => shared/shareData/shareModalCourseManager/sharemodalcoursemanager.service row 15
  // getModalMaKhoaHoc => post string maKhoaHoc => shared/shareData/shareModalCourseManager/sharemodalcoursemanager.service row 24
  settingCourse(course: object) {
    this.infoCourse = course
    const { biDanh, danhMucKhoaHoc, hinhAnh, luotXem, maNhom, moTa, ngayTao, nguoiTao, soLuongHocVien, tenKhoaHoc, ..._maKhoaHoc } = this.infoCourse
    this.shareModalCourseManagerService.getModalCourse(_maKhoaHoc) // post objet
    this.shareModalCourseManagerService.getModalMaKhoaHoc(_maKhoaHoc.maKhoaHoc) // post string
    this.modalCourse.open(ModalcoursemanagerComponent) // open modal
  }
  // move => AddcoursemanagerComponent
  addCourse() {
    this.router.navigate(['admin/addCourse'])
  }
  // move => admin/course-management/updatecoursemanager/updatecoursemanager.component;
  // post data course => @shared/shareData/shareUpdateCourse/shareupdatecourse.service
  upDateCourse(course: object) {
    this.shareUpdateCourseService.getDataUpdateCourse(course)
    this.router.navigate(['admin/updateCourse'])
  }

}
