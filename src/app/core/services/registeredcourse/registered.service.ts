import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistedCourse } from '../../models/course';
import { ApiService } from '../dataService/api.service';

@Injectable({
    providedIn: 'root'
})
export class RegisteredService {
    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) { }
    // =>  client/detail/detail.component.ts row 39 
    // RegistedCourse // gán model từ core/models/course.ts row 30
    registeredCourse(infoRegistered: object): Observable<RegistedCourse> {
        let url = "QuanLyKhoaHoc/DangKyKhoaHoc";
        return this.apiService.postApiToken(url, infoRegistered, {responseType: 'text'})// { responseType: "text" } lỗi json backend chưa fix
    }
}
