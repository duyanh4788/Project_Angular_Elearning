import { Injectable } from '@angular/core';
import { ApiService } from '@service/dataService/api.service';
import { Observable } from 'rxjs';
import { EditInfoUser } from '../../models/inforUser';

@Injectable({
    providedIn: 'root'
})

export class EditinfouserService {

    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) { }

    // => client/components/modalinfouser/modalinfouser.component row 59
    // EditInfoUser model => models/inforUser
    putInfoUser(infoUser: object): Observable<EditInfoUser> {
        let url = "QuanLyNguoiDung/CapNhatThongTinNguoiDung";
        return this.apiService.putApi(url, infoUser)
    }
}
