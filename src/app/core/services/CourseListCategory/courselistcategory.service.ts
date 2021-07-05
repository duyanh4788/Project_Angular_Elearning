import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';
import { Observable } from 'rxjs';
import { ListCourseByCategory } from '../../models/listcourseByCategory';

@Injectable({
    providedIn: 'root'
})
export class CourselistcategoryService {

    constructor(private apiService: ApiService) { }
    // dùng cho pt getCategoryCourses client/components/header/header.component row 48
    // maDanhMuc , maNhom nhận từ HeaderComponent client/components/header/header.component row 70
    getListCourseByCategoryApi(maDanhMuc: string, maNhom: any): Observable<ListCourseByCategory[]> {
        let url = `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${maNhom}`
        return this.apiService.getApi(url)
    }
}
