import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';

@Injectable({
    providedIn: 'root'
})

export class DeletecourseService {

    // refactor service => DataService services/dataService/data.service.ts 
    constructor(private apiService: ApiService) { }

    //  deleteCourse(maKhoaHoc: string) => admin/course-management/course-management.component row 48
    deleteCourseManagerPage(maKhoaHoc: string) {
        let url = `QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`;
        return this.apiService.deleteApi(url, { responseType: 'text' })
    }
}
