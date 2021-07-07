import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';

@Injectable({
    providedIn: 'root'
})

export class AddcourseService {
    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) { }
    // handleAddCourse() => admin/course-management/addcoursemanager/addcoursemanager.component
    postDataCourse(data: object) {
        let url = "QuanLyKhoaHoc/ThemKhoaHocUploadHinh";
        return this.apiService.postApiToken(url, data, { responseType: "text" })
    }
}