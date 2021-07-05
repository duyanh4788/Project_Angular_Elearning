import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddUsers } from '../../../models/client';
import { ApiService } from '../../dataService/api.service';

@Injectable({
    providedIn: 'root'
})
export class AdduserService {
    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) { }
    // sử dụng cho component admin/adduser/adduser.service.ts row 22
    // users => giá trị nhận từ this.formAddUser.value admin/adduser/adduser.service.ts row 25
    // AddUsers => model models/client
    addUserService(users: object): Observable<AddUsers> {
        let url = "QuanLyNguoiDung/ThemNguoiDung";
        return this.apiService.postApi(url, users)
    }
}
