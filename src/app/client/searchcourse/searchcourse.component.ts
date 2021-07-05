import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchlistcourseService } from '@service/searchlistcourse/searchlistcourse.service';
import { SharesearchcourseService } from '@shared/shareData/shareSearchCourse/sharesearchcourse.service';
import { SharemodalcourseService } from '@shared/shareData/shareModalCourse/sharemodalcourse.service';
import { ListCourseByCategory } from 'src/app/core/models/listcourseByCategory';
import { ModaldetailcourseComponent } from '../components/modaldetailcourse/modaldetailcourse.component';
import { LoadingService } from '@service/loading/loading.service';

@Component({
  selector: 'app-findcourse',
  templateUrl: './searchcourse.component.html',
  styleUrls: ['./searchcourse.component.scss'],
})
export class SearchcourseComponent implements OnInit {

  public arrSearchListCourse: ListCourseByCategory[] = []; // model => models/listcourseByCategory
  public reSults: number = 0; // interpolation html
  public gridColums: number = 1; // interpolation 4 col trên row (mat-card)

  constructor(
    private findlistcourseService: SearchlistcourseService,
    private sharefindcourseService: SharesearchcourseService,
    private shareModalService: SharemodalcourseService,
    private modalDetail: MatDialog,
    private loadingService: LoadingService, // hiden loading
  ) {}

  ngOnInit(): void {
    this.getSearchHeader();
  }

  // shareSearchCourse( dataSearch ) => get data shared/shareData/shareFindCourse/sharesearchcourse.service
  // getCurrentCourse( data arrSearchListCourse ) => get data service/searchlistcourse/searchlistcourse.service
  getSearchHeader() {
    this.sharefindcourseService.shareSearchCourse.subscribe((dataSearch) => {
      this.arrSearchListCourse = this.findlistcourseService.getCurrentCourse();
      // filter
      this.arrSearchListCourse = this.arrSearchListCourse.filter((item) => {
        return item.tenKhoaHoc
          .toLocaleLowerCase()
          .match(dataSearch.toLocaleLowerCase());
      });
      // set data results => get data service/searchlistcourse/searchlistcourse.service
      this.findlistcourseService.setCurrentResult(
        this.arrSearchListCourse.length
      );
      // get data results => get data service/searchlistcourse/searchlistcourse.service
      this.reSults = this.findlistcourseService.getCurrentResult();
      setTimeout(() => {
        this.loadingService.hidden()
      }, 500);
    });
  }
  // lấy object course từ  (click)="getDetailCourse(course)" row 28
  getDetailCourse(course: object) {
    this.shareModalService.getModalCourse(course); // truyền object course đến core/modalCourse/modalcourse.service.ts row 14
    this.modalDetail.open(ModaldetailcourseComponent); // mở client/components/modaldetailcourse/modaldetailcourse.component.html
  }
}

// (*) arrSearchListCourse đã đc gọi sẵn tại header.component nên sẽ filter đc
