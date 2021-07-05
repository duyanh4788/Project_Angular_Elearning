import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSignUp } from '../../models/client';
import { ApiService } from '../dataService/api.service';

@Injectable({
    providedIn: 'root'
})
export class SignupcourseService {

    constructor(private apiService: ApiService) { }
    // => component client/signup/signup.component.ts row 24
    // formSignUp => component client/signup/signup.component.ts row 23
    // UserSignUp  models/client.ts row 1
    signUpUser(formSignUp: object): Observable<UserSignUp[]> { // users
        let url = "QuanLyNguoiDung/DangKy"
        return this.apiService.postApi(url, formSignUp)
    }
}
