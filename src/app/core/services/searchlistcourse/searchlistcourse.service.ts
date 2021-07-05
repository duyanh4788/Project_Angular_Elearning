import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListCourseByCategory } from '../../models/listcourseByCategory';
import { ApiService } from '../dataService/api.service';

@Injectable({
    providedIn: 'root'
})

export class SearchlistcourseService {

    public arrSearchListCourse: ListCourseByCategory[] = []

    //  result
    private currentResultsSubject = new BehaviorSubject(null);
    currentResults = this.currentResultsSubject.asObservable()
    // post data results => client/searchcourse/searchcourse.component row 34
    getCurrentResult(): any {
        return this.currentResultsSubject.value
    }
    // save data results => client/searchcourse/searchcourse.component row 36
    setCurrentResult(value: any) {
        this.currentResultsSubject.next(value)
    }
    //  result

    //  arrSearchListCourse
    private currentCourseSubject = new BehaviorSubject(null);
    currentCourse = this.currentCourseSubject.asObservable()
    // post data arrSearchListCourse => client/searchcourse/searchcourse.component row 28
    getCurrentCourse(): any {
        return this.currentCourseSubject.value
    }
    //  save data arrSearchListCourse => client/components/header/header.component row 103
    setCurrentCourse(value: any) {
        this.arrSearchListCourse = value
        this.currentCourseSubject.next(value)
    }
    //  arrSearchListCourse

    // khi user nhập input search header.component sẽ filter searchcourse.component arrSearchListCourse sẽ thay đổi
    constructor(private apiService: ApiService) {
        this.setCurrentCourse(this.arrSearchListCourse)
    }

    // refactor service => apiService services/apiService/data.service.ts
    // => client/searchcourse/searchcourse.component.ts row 21
    // ListCourseByCategory model => models/listcourseByCategory
    getSearchCourse(maNhom: any): Observable<ListCourseByCategory[]> {
        let url = `QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`
        return this.apiService.getApi(url)
    }
}
