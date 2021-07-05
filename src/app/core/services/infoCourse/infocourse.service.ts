import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailCourse } from '../../models/course';
import { ApiService } from '../dataService/api.service';

@Injectable({
    providedIn: 'root'
})
export class InfocourseService {
    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) { }
    // sử dụng cho component && maKhoaHoc nhận từ client/detail/detail.component.ts row 32 
    // DetailCourse  // gán model từ core/models/course.ts row 36
    getDetailCourses(maKhoaHoc: string): Observable<DetailCourse> {
        let url = `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`;
        return this.apiService.getApi(url)
    }
}
