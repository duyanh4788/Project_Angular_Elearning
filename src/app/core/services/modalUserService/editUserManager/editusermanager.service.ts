import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';
import { Observable } from 'rxjs';
import { UpdatetUserManager } from '../../../models/client';

@Injectable({
    providedIn: 'root'
})
export class EditusermanagerService {

    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) { }
    // ( this.formEditUser.value = dataForm)=> admin/modalusermanager/updateuser/updateuser.component => row 76
    // UpdatetUserManager model => models/inforUser row 50
    putEditService(dataForm: object): Observable<UpdatetUserManager> {
        let url = "QuanLyNguoiDung/CapNhatThongTinNguoiDung";
        return this.apiService.putApi(url, dataForm)
    }
}
