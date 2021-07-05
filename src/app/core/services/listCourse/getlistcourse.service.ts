import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ListCourse } from "../../models/course";
import { ApiService } from "../dataService/api.service";

@Injectable({
    providedIn: "root",
})
export class GetlistcourseService {
    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) { }
    // sử dụng cho component client/home/listcourse.component.ts row 21
    // maNhom = > nhận từ getListCourses(maNhom:any) client/home/listcourse.component.ts row 21
    getListCourse(maNhom: string): Observable<ListCourse[]> {
        let url = `QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`
        return this.apiService.getApi<ListCourse[]>(url)
    }
}
