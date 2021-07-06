import { Injectable } from "@angular/core";
import { ApiService } from "@service/dataService/api.service";
import { BehaviorSubject, Observable } from "rxjs";
import { UserSigIn } from "../../models/client";

@Injectable({
    providedIn: "root",
})


export class SigincourseService {
    private currentUserSubject = new BehaviorSubject(null);
    // currentUserSubject.asObservable() => Biến currentUser thành 1 Observable => Có thể subscrible sự thay đổi data của currentUser
    currentUser = this.currentUserSubject.asObservable();
    // pot data => getUserName() course-management/addcoursemanager/addcoursemanager.component
    // => core/guard/authadmin/auth.gurad.ts row 30  &&
    // authinforUser/authinfouser.guard.ts row 19
    // component/header/header.component row 38
    // client/components/infouser/infouser.component row 22
    // admin/infoadmin/infoadmin.component" row 26
    getCurrentUser(): any {
        return this.currentUserSubject.value;
    }
    // nhận data localstorage từ client/sigin/sigin.component.ts row 31
    setCurrentUser(value: any) {
        this.currentUserSubject.next(value);
    }
    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) {
        // nếu dữ liệu thay đổi , set lại data localStorage
        const dataJson = localStorage.getItem("userSignIn");
        if (dataJson) {
            this.setCurrentUser(JSON.parse(dataJson));
        }
    }
    // sử dụng cho component client/signin/signin.component.ts row 18
    // formSignIn => giá trị nhận từ formSignIn!: NgForm => client/signin/signin.component.ts row 13
    signInUser(formSignIn: object): Observable<UserSigIn> {
        let url =
            "QuanLyNguoiDung/DangNhap";
        return this.apiService.postApi(url, formSignIn)
    }
}
