import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SharesearchcourseService {
    // post data => client/searchcourse/searchcourse.component
    private searchCourses = new BehaviorSubject("" as string)
    shareSearchCourse = this.searchCourses.asObservable()

    constructor() { }
    // get data HeaderComponent => client/components/header/header.component row 108
    setSearchCourse(search: string) {
        this.searchCourses.next(search)
    }
}
