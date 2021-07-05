import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';
import { Observable } from 'rxjs';
import { UpdateCourse } from '../../models/updateCourseManager';

@Injectable({
    providedIn: 'root'
})
export class UpdatecourseService {

    constructor(private apiService: ApiService) { }

    postUpdateCourse(data: object):Observable<UpdateCourse> {
        let url = "QuanLyKhoaHoc/CapNhatKhoaHocUpload";
        return this.apiService.postApiToken<UpdateCourse>(url, data, { responseType: 'text' })
    }

}
