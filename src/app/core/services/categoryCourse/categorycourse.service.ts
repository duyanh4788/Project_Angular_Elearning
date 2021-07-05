import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';

@Injectable({
    providedIn: 'root'
})

export class CategorycourseService {
    // refactor service => apiService services/apiService/data.service.ts.
    // getCategoryCourse => client/components/header/header.component row 54
    constructor(private apiService: ApiService) { }
    getCategoryCourse() {
        let url = "QuanLyKhoaHoc/LayDanhMucKhoaHoc";
        return this.apiService.getApi(url)
    }
}
