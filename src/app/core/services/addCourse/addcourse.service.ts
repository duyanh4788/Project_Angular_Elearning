import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';
import { Observable } from 'rxjs';
import { AddCourse } from '../../models/addCourse';

@Injectable({
    providedIn: 'root'
})


export class AddcourseService {
    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) { }
    // handleAddCourse() => admin/course-management/addcoursemanager/addcoursemanager.component
    // AddCourse models/addCourse , data => this.formAddCoure.value
    postDataCourse(data: object): Observable<AddCourse> {
        let url = "QuanLyKhoaHoc/ThemKhoaHocUploadHinh";
        return this.apiService.postApiToken<AddCourse>(url, data, { responseType: "text" })
    }
}