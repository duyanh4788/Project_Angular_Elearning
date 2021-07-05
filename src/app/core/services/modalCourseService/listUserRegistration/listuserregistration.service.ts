import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';
import { Observable } from 'rxjs';
import { ArrListUserRegistration, RegisterCourse } from 'src/app/core/models/courseManager';

@Injectable({
    providedIn: 'root'
})
export class ListuserregistrationService {

    constructor(private apiService: ApiService) { }

    // ArrListUserRegistration => models/courseManager
    //getListUserUnRegister() => admin/modalcoursemanager/listuserunregisterd/listuserunregisterd.component row 32
    postListUserRegister(objectMaKhoaHoc: object): Observable<ArrListUserRegistration[]> {
        let url = "QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh";
        return this.apiService.postApiToken<ArrListUserRegistration[]>(url, objectMaKhoaHoc, { responseType: "text" })
    }

    // RegisterCourse => models/courseManager
    // registeredCourse() => admin/modalcoursemanager/courseregisterd/courseregisterd.component row 55
    postRegisteredCourse(inforUser: object): Observable<RegisterCourse> {
        let url = "QuanLyKhoaHoc/GhiDanhKhoaHoc";
        return this.apiService.postApiToken<RegisterCourse>(url, inforUser, { responseType: "text" })
    }

    // ArrListUserRegistration => models/courseManager
    // getListUserWaitApproval() => admin/modalcoursemanager/courseregisterd/courseregisterd.component row 67
    postUserWaitApproval(maKhoaHoc: object): Observable<ArrListUserRegistration[]> {
        let url = "QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet";
        return this.apiService.postApiToken<ArrListUserRegistration[]>(url, maKhoaHoc, { responseType: "text" })
    }

    // RegisterCourse => models/courseManager
    // apProvalUser() => admin/modalcoursemanager/courseregisterd/courseregisterd.component row 82
    postApproval(inforUser: object): Observable<RegisterCourse> {
        let url = "QuanLyKhoaHoc/GhiDanhKhoaHoc";
        return this.apiService.postApiToken<RegisterCourse>(url, inforUser, { responseType: "text" })
    }

    // RegisterCourse => models/courseManager
    // cancelApproval() => admin/modalcoursemanager/courseregisterd/courseregisterd.component row 95
    postCancelApproval(inforUser: object): Observable<RegisterCourse> {
        let url = "QuanLyKhoaHoc/HuyGhiDanh";
        return this.apiService.postApiToken<RegisterCourse>(url, inforUser, { responseType: "text" })
    }

    // ArrListUserRegistration => models/courseManager
    // getListUserWaitApproval() => admin/modalcoursemanager/ListuserapprovalComponent/ListuserapprovalComponent.component row 43
    // setListUserApproval() => admin/modalcoursemanager/ListuserwaitapprovalComponent/ListuserwaitapprovalComponent.component row 94
    postUserApproval(maKhoaHoc: object): Observable<ArrListUserRegistration[]> {
        let url = "QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc";
        return this.apiService.postApiToken<ArrListUserRegistration[]>(url, maKhoaHoc, { responseType: "text" })
    }
}
