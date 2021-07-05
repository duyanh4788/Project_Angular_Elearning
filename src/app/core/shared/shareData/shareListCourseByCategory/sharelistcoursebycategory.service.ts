import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SharelistcoursebycategoryService {
    // truyền data cho client/listcoursebycategory/listcoursebycategory.component row 27
    private listCourseByCategory = new BehaviorSubject([] as Array<any>)
    shareListCourseByCategory = this.listCourseByCategory.asObservable()
    getListCourseByCategory(): any {
        return this.listCourseByCategory.value
    }
    // setListCourseByCategory nhận data từ client/components/header/header.component row 49
    setListCourseByCategory(course: any) {
        this.listCourseByCategory.next(course)
    }

    // truyền data cho client/listcoursebycategory/listcoursebycategory.component row 27
    // private codeCategory = new BehaviorSubject("" as string)
    // shareCodeCategory = this.codeCategory.asObservable()
    // getCatalogCode(code: any) {
    //     this.listCourseByCategory.next(code)
    // }

    constructor() { }
}
