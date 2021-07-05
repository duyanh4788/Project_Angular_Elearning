import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';
import { Observable } from 'rxjs';
import { SearchUser } from '../../../models/client';

@Injectable({
    providedIn: 'root'
})
export class SearchuserService {

    constructor(private apiService: ApiService) { }

    // SearchUser models/client 
    // search => this.formSearchApi?.value.searchApi UserManagementComponent
    getSearchUser(search: string , maNhom:string): Observable<SearchUser[]> {
        let url = `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${maNhom}&tuKhoa=${search}`
        return this.apiService.getApi<SearchUser[]>(url)
    }
}
