import { Injectable } from "@angular/core";
import { ApiService } from "@service/dataService/api.service";
import { BehaviorSubject, Observable } from "rxjs";
import { UserSignIn } from "../../models/client";

@Injectable({
    providedIn: "root",
})

export class SigincourseService {

    // hoTen
    public userName: string = ""
    // post hoTen => component/header/header.component row 38
    // post hoTen => component/header/sideheader.component row 40
    private currentUserName = new BehaviorSubject(null);
    shareUserName = this.currentUserName.asObservable();
    // get data json hoTen => client/signin/signin.component.ts row 38
    // setState hoTen sau khi edit => client/components/modalinfouser/modalinfouser.component
    setCurrentUserName(value: any) {
        this.userName = value
        this.currentUserName.next(value);
    }
    // hoTen

    // maLoaiNguoiDung
    public typeCode: string = ""
    private currentTypeCode = new BehaviorSubject(null);
    shareTypeCode = this.currentTypeCode.asObservable();
    // post currentTypeCode => core/guard/authadmin/auth.gurad.ts
    // post currentTypeCode => authinforUser/authinfouser.guard.ts
    getCurrentTypeCode(): any {
        return this.currentTypeCode.value;
    }
    // get data json maLoaiNguoiDung => client/signin/signin.component.ts row 38
    setCurrentTypeCode(value: any) {
        this.typeCode = value
        this.currentTypeCode.next(value);
    }
    // maLoaiNguoiDung

    // accessToken
    public toKen: string = ""
    // post token => client/components/infouser/infouser.component row 22
    // post token => admin/infoadmin/infoadmin.component" row 26
    private currentToken = new BehaviorSubject(null);
    shareToken = this.currentToken.asObservable();
    // setState contructor
    getCurrentToken(): any {
        return this.currentToken.value;
    }
    // get data json accessToken => client/signin/signin.component.ts row 38
    setCurrentToken(value: any) {
        this.toKen = value
        this.currentToken.next(value);
    }
    // accessToken

    // taiKhoan
    public account: string = ""
    // post Account => client/components/infouser/infouser.component row 22
    // post Account => admin/infoadmin/infoadmin.component" row 26
    private currentAccount = new BehaviorSubject(null);
    shareAccount = this.currentAccount.asObservable();
    // post Account => client/detail/detail.component.ts row 52
    getCurrentAccount(): any {
        return this.currentAccount.value;
    }
    // get data json taiKhoan => client/signin/signin.component.ts row 38
    // setSate taiKhoan => component/header/header.component row 100
    setCurrentAccount(value: any) {
        this.account = value
        this.currentAccount.next(value);
    }
    // taiKhoan

    // refactor service => DataService services/dataService/data.service.ts
    constructor(private apiService: ApiService) {

        // hoTen
        const userName = localStorage.getItem("userName");
        if (userName) {
            this.setCurrentUserName(JSON.parse(userName))
        }
        // maLoaiNguoiDung
        const typeCode = localStorage.getItem("userTypeCode");
        if (typeCode) {
            this.setCurrentTypeCode(JSON.parse(typeCode))
        }
        // accessToken
        const toKen = localStorage.getItem("toKen");
        if (toKen) {
            this.setCurrentToken(JSON.parse(toKen))
        }

        // accessToken
        const account = localStorage.getItem("account");
        if (account) {
            this.setCurrentAccount(JSON.parse(account))
        }

    }
    
    // => component client/signin/signin.component.ts row 18
    // formSignIn (formSignIn!: NgForm) => client/signin/signin.component.ts row 31
    signInUser(formSignIn: object): Observable<UserSignIn> {
        let url =
            "QuanLyNguoiDung/DangNhap";
        return this.apiService.postApi(url, formSignIn)
    }

}
