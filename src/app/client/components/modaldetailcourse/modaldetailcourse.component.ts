import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharemodalcourseService } from '@shared/shareData/shareModalCourse/sharemodalcourse.service';
import { ListcourseComponent } from '../../home/listcourse/listcourse.component';

@Component({
  selector: 'app-modaldetailcourse',
  templateUrl: './modaldetailcourse.component.html',
  styleUrls: ['./modaldetailcourse.component.scss']
})
export class ModaldetailcourseComponent implements OnInit {
  public detailCourse: any;// interpolation => html
  // shareModalService => service gọi từ shared/shareData/shareModalCourse/sharemodalcourse.service
  // listcourseComponent => khai báo component , khi open modal
  // ListcoursebycategoryComponent listcourse/listcourse.component dùng modal ?
  constructor(@Inject(MAT_DIALOG_DATA) public listcourseComponent: ListcourseComponent, private shareModalService: SharemodalcourseService) { }

  ngOnInit(): void {
    this.getDetailCourse()
  }
  // shareModalCourse => phương thức nhận data từ core/modalCourse/modalcourse.service.ts row 10
  getDetailCourse(){
    this.shareModalService.shareModalCourse.subscribe((data:any) => {
      this.detailCourse = data
    })
  }
}
