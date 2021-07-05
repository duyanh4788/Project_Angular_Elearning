import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SharemodalusermanagerService {

    // post object admin/modalusermanager/userregister/userregister.component row 40
    // post object admin/modalusermanager/updateuser/updateuser.component row 40
    private modalUserManager = new BehaviorSubject({} as object)
    shareModalUser = this.modalUserManager.asObservable()
    // get object users => admin/user-management/user-management.component row 113
    getModalUser(users: object) {
        this.modalUserManager.next(users)
    }

    // post maNhom admin/modalusermanager/updateuser/updateuser.component row 43
    private modalMaNhom = new BehaviorSubject("" as string)
    shareModalMaNhom = this.modalMaNhom.asObservable()
    // get maNhom => admin/user-management/user-management.component row 113
    getModalMaNhom(maNhom: string) {
        this.modalMaNhom.next(maNhom)
    }

    constructor() { }
}
