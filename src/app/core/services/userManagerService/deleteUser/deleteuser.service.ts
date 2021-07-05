import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteUsers } from '../../../models/client';
import { ApiService } from '../../dataService/api.service';

@Injectable({
    providedIn: 'root'
})
export class DeleteuserService {
    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) { }
    //sử dụng cho && (taiKhoan) nhận từ => component admin/user-management/user-management.component.ts row 61
    // DeleteUsers // gọi model core/models/client.ts row 23
    deleteUser(taiKhoan: string): Observable<DeleteUsers> {
        let url = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
        return this.apiService.deleteApi(url, { responseType: "text" })// { responseType: "text" } lỗi json backend chưa fix
    }
}
