import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';
import { Observable } from 'rxjs';
import { UnSubsCribeCouse } from '../../models/inforUser';

@Injectable({
    providedIn: 'root'
})
export class UnsubscribecourseService {

    constructor(private apiService: ApiService) { }
    // => client/components/infouser/infouser.component
    unSubsCribeCouseService(data: any): Observable<UnSubsCribeCouse> {
        let url = "QuanLyKhoaHoc/HuyGhiDanh";
        return this.apiService.postApiToken(url, data, { responseType: 'text' })// { responseType: "text" } lỗi json backend chưa fix
    }
}