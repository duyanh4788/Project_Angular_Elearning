import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SharemodalcoursemanagerService {

    // get object course
    // post object admin/modalcoursemanager/ListuserunregisterdComponent/ListuserunregisterdComponent.component row 31
    private modalCourseManager = new BehaviorSubject({} as object)
    shareModalCourse = this.modalCourseManager.asObservable()
    // get _maKhoaHoc => admin/course-management/course-management.component row 65
    getModalCourse(_maKhoaHoc: object) {
        this.modalCourseManager.next(_maKhoaHoc)
    }

    // get string maKhoaHoc
    // post maKhoaHoc admin/modalcoursemanager/listuserapproval/listuserapproval.component row 40
    // post maKhoaHoc admin/modalcoursemanager/listuserunregisterd/listuserunregisterd.component row 41
    private modalmaKhoaHoc = new BehaviorSubject({} as object)
    sharemaKhoaHoc = this.modalmaKhoaHoc.asObservable()
    // get _maKhoaHoc.maKhoaHoc => admin/course-management/course-management.component row 67
    getModalMaKhoaHoc(maKhoaHoc: any) {
        this.modalmaKhoaHoc.next(maKhoaHoc)
    }

    constructor() { }
}
