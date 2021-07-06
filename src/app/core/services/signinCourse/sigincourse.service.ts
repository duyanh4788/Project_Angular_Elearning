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
    // subscribe object info user => course-management/addcoursemanager/addcoursemanager.component
    currentUser = this.currentUserSubject.asObservable();
    // post object info user => core/guard/authadmin/auth.gurad.ts row 30  &&
    // post object info user => authinforUser/authinfouser.guard.ts row 19
    // post token => client/components/infouser/infouser.component row 22
    // post token => admin/infoadmin/infoadmin.component" row 26
    getCurrentUser(): any {
        return this.currentUserSubject.value;
    }
    // nhận data localstorage từ client/sigin/sigin.component.ts row 31
    setCurrentUser(value: any) {
        this.currentUserSubject.next(value);
    }
    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) {
        // singout setstate info user data localStorage
        const dataJson = localStorage.getItem("userSignIn");
        if (dataJson) {
            this.setCurrentUser(JSON.parse(dataJson));
        }
         // singout setstate hoTen header sideheader localStorage
        const userName = localStorage.getItem("userName");
        if (userName) {
            this.setCurrentUserName(JSON.parse(userName))
        }
    }
    // sử dụng cho component client/signin/signin.component.ts row 18
    // formSignIn => giá trị nhận từ formSignIn!: NgForm => client/signin/signin.component.ts row 31
    signInUser(formSignIn: object): Observable<UserSigIn> {
        let url =
            "QuanLyNguoiDung/DangNhap";
        return this.apiService.postApi(url, formSignIn)
    }


    public userName: string = ""
    // post hoTen => component/header/header.component row 38
    // post hoTen => component/header/sideheader.component row 40
    private currentUserName = new BehaviorSubject(null);
    shareUserName = this.currentUserName.asObservable();
    // get data json hoTen => client/signin/signin.component.ts row 38
    // get hoTen sau khi edit => client/components/modalinfouser/modalinfouser.component
    setCurrentUserName(value: any) {
        this.userName = value
        this.currentUserName.next(value);
    }

}
