import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';
import { Observable } from 'rxjs';
import { ListCouseUnRegisteds, ListWaitApproval, TaiKhoanRegisted, ThongTinGhiDanh } from 'src/app/core/models/listCourseUnRegisted';

@Injectable({
    providedIn: 'root'
})


export class ListcourseregistrationService {

    constructor(private apiService: ApiService) { }

    // admin/modalusermanager/userregister/userregister.component';
    // string taiKhoan => this.listUser.taiKhoan
    // ListCouseUnRegisteds => models/listCourseUnRegisted row 3
    // => ChuaGhiDanh
    postListCourseUnRegister(taiKhoan: any): Observable<ListCouseUnRegisteds[]> {
        let url = `QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`
        return this.apiService.postApiToken<ListCouseUnRegisteds[]>(url, taiKhoan, { responseType: 'text' })// { responseType: "text" } lỗi json backend chưa fix
    }

    // admin/modalusermanager/userregister/userregister.component';
    // object taiKhoan => this.taiKhoan = _taiKhoan.taiKhoan row 35
    // TaiKhoanRegisted => models/listCourseUnRegisted row 18
    // => DaXetDuyet
    postListCourseRegister(taiKhoan: object): Observable<TaiKhoanRegisted> {
        let url = "QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet"
        return this.apiService.postApiToken<TaiKhoanRegisted>(url, taiKhoan, { responseType: 'text' })// { responseType: "text" } lỗi json backend chưa fix
    }

    // admin/modalusermanager/userregister/userregister.component';
    // object taiKhoan => this.taiKhoan = _taiKhoan.taiKhoan row 35
    // TaiKhoanRegisted => models/listCourseUnRegisted row 18
    // => daDangKy
    postListCourseWaitApproval(taiKhoan: object): Observable<ListWaitApproval[]> {
        let url = "QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet"
        return this.apiService.postApiToken<ListWaitApproval[]>(url, taiKhoan, { responseType: 'text' })// { responseType: "text" } lỗi json backend chưa fix
    }

    // admin/modalusermanager/userregister/userregister.component';row 52
    // object taiKhoan => this.thongTinGhiDanh
    // ThongTinGhiDanh => models/listCourseUnRegisted row 24
    // => đăng ký 
    postRegistedCourse(thongTin: object): Observable<ThongTinGhiDanh> {
        let url = "QuanLyKhoaHoc/GhiDanhKhoaHoc";
        return this.apiService.postApiToken<ThongTinGhiDanh>(url, thongTin, { responseType: 'text' })// { responseType: "text" } lỗi json backend chưa fix
    }

    // admin/modalusermanager/userregister/userregister.component' row 65
    // object thongTin => this.thongTinGhiDanh
    // ThongTinGhiDanh => models/listCourseUnRegisted row 24
    // => huỷ đăng ký 
    postCancelRegistedCourse(thongTin: object): Observable<ThongTinGhiDanh> {
        let url = "QuanLyKhoaHoc/HuyGhiDanh";
        return this.apiService.postApiToken<ThongTinGhiDanh>(url, thongTin, { responseType: 'text' })// { responseType: "text" } lỗi json backend chưa fix
    }
}
