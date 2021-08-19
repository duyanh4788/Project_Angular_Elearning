import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';

@Injectable({
    providedIn: 'root'
})
export class UpdatecourseService {

    constructor(private apiService: ApiService) { }

    putUpdateCourse(data: any) {
        let url = "QuanLyKhoaHoc/CapNhatKhoaHoc";
        return this.apiService.putApi(url, data)
    }
    putImagesUpdateCourse(data: any) {
        let url = "QuanLyKhoaHoc/UploadHinhAnhKhoaHoc";
        return this.apiService.postApiToken(url, data, { responseType: "text" })
    }
}
