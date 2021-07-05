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

    // selectGroup(24) && selectGroupDefault(31) => admin/course-management/course-management.component
    // CourseManager => models/courseManager
    getListCourseManagerPage(maNhom: string): Observable<CourseManager> {
        let url = `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=10&MaNhom=${maNhom}`;
        return this.apiService.getApi<CourseManager>(url)
    }

}
