import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// shareModalCourse truyền data đến component client/home/modaldetailcourse/modaldetailcourse.component.ts row 22
export class SharemodalcourseService {
  private detaiModallCourse = new BehaviorSubject({} as object)
  shareModalCourse = this.detaiModallCourse.asObservable()
  constructor() { }

  // transMissionModalCourse nhận data từ client/home/listcourse/listcourse.component.ts row 44
  getModalCourse(course: object) {
    this.detaiModallCourse.next(course)
  }
}
// client/home/listcourse/listcourse.component
// client/searchcourse/searchcourse.component
// client/listcoursebycategory/listcoursebycategory/listcoursebycategory.component