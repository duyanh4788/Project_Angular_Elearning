import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UpdateCourse } from 'src/app/core/models/updateCourseManager';

@Injectable({
    providedIn: 'root'
})

export class ShareupdatecourseService {

    public updateCourse!: UpdateCourse // models/updateCourseManager

    // post data course => admin/course-management/updatecoursemanager/updatecoursemanager.component
    private currentUpdateCourse = new BehaviorSubject({} as object)
    shareUpdateCourse = this.currentUpdateCourse.asObservable()

    // get data course => admin/course-management/course-management.component row 86
    getDataUpdateCourse(infoCourse: any) {
        console.log(infoCourse);
        this.updateCourse = infoCourse
        this.currentUpdateCourse.next(infoCourse)
    }
    
    constructor() {
        if (this.updateCourse) {
            this.getDataUpdateCourse(this.updateCourse)
        }
    }

}
