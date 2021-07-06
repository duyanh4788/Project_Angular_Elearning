import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';
import { Observable } from 'rxjs';
import { CourseManager } from 'src/app/core/models/courseManager';

@Injectable({
    providedIn: 'root'
})
export class ListcoursemanagerService {

    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) { }

    // => admin/course-management/course-management.component
    // => component admin/infoadmin/infoadmin.component.ts row 60 & 70
    // CourseManager => models/courseManager
    getListCourseManagerPage(maNhom: string): Observable<CourseManager[]> {
        let url = `QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`;
        return this.apiService.getApi<CourseManager[]>(url)
    }

}
