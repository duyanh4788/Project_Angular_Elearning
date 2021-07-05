import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListUserTableManager } from '../../../models/client';
import { ApiService } from '../../dataService/api.service';

@Injectable({
    providedIn: 'root'
})
export class ListuserService {
    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) { }
    //sử dụng cho && (maNhom) nhận từ => component admin/user-management/user-management.component.ts row 52
    //ListUser đôí tương taọ từ /models/client.ts row 14
    getListUser(maNhom: string): Observable<ListUserTableManager[]> {
        let url = `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`;
        return this.apiService.getApi(url)
    }
}
