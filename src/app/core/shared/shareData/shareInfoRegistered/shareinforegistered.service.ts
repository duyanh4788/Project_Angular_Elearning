import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ArrListUserRegistration } from 'src/app/core/models/courseManager';

@Injectable({
    providedIn: 'root'
})
export class ShareinforegisteredService {

    public arrListUserRegistration: ArrListUserRegistration[] = [];

    // post data => => admin/modalcoursemanager/listuserunregisterd/listuserunregisterd.component row 48
    private currentArrlistUser = new BehaviorSubject([] as Array<any>)
    shareCurrentArrListUser = this.currentArrlistUser.asObservable()

    // get data => => admin/modalcoursemanager/listuserapproval/listuserapproval.component row 91
    // get data => => admin/modalcoursemanager/listuserunregisterd/listuserunregisterd.component row 44
    setArrListCurrentUser(listUser: any) {
        this.arrListUserRegistration = listUser
        this.currentArrlistUser.next(this.arrListUserRegistration)
    }

    // post data => => admin/modalcoursemanager/listuserapproval/listuserapproval.component row 51
    private currentArrapProval = new BehaviorSubject([] as Array<any>)
    shareCurrentArrapProval = this.currentArrapProval.asObservable()

    // get data => => admin/modalcoursemanager/listuserapproval/listuserapproval.component row 48
    // get data => => admin/modalcoursemanager/listuserwaitapproval/listuserwaitapproval.component row 99
    // get data => => admin/modalcoursemanager/listuserunregisterd/listuserunregisterd.component row 90
    setArrapProval(listUser: any) {
        this.arrListUserRegistration = listUser
        this.currentArrapProval.next(this.arrListUserRegistration)
    }

    // setState get & post data 
    constructor() {
        if (this.arrListUserRegistration) {
            this.setArrListCurrentUser(this.arrListUserRegistration)
            this.setArrapProval(this.arrListUserRegistration)
        }
    }

}
