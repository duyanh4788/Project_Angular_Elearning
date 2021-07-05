import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EditUser } from 'src/app/core/models/inforUser';

@Injectable({
    providedIn: 'root'
})

export class SharemodalinfouserService {
    // post info user client/components/modalinfouser/modalinfouser.component'
    private modalInfoUser = new BehaviorSubject({} as EditUser)
    shareModalInfoUser = this.modalInfoUser.asObservable()
    constructor() { }
    //  get info user => client/components/infouser/infouser.component';
    getModalInfoUser(infoUser: any) {
        this.modalInfoUser.next(infoUser)
    }

}
