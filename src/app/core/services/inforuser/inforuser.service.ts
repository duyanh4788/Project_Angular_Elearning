import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InforUser } from '../../models/inforUser';
import { ApiService } from '../dataService/api.service';

@Injectable({
    providedIn: 'root'
})
export class InforuserService {

    public infoUsers?: InforUser; //InforUser /models/inforUser.ts row 1
    private currentInforUser = new BehaviorSubject(null);
    InforUser = this.currentInforUser.asObservable()

    // set data => component/infouser/infouser.component.ts row 46
    // set data => admin/infoadmin/infoadmin.component" row 27
    getInforUser(): any {
        return this.currentInforUser.value
    }
    // get data => client/components/modalinfouser/modalinfouser.component
    // get data => admin/infoadmin/infoadmin.component row 31
    setInforUser(value: any) {
        this.currentInforUser.next(value)
    }

    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) {
        this.setInforUser(this.infoUsers) // set lại data sau khi edit => render html
    }
    // call api post => component/infouser/infouser.component.ts row 20
    // call api post => admin/infoadmin/infoadmin.component" row 27
    // data = authToken infouser && infoadmin
    // InforUser => models/inforUser.ts row 1
    getInfoUserService(data: string): Observable<InforUser> {
        let url = "QuanLyNguoiDung/ThongTinNguoiDung"
        return this.apiService.postApi(url, data)
    }
}