import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from '@service/loading/loading.service';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
};
// 'arraybuffer'|'blob'|'json'|'text',
@Injectable({
    providedIn: 'root'
})


export class ApiService {

    constructor(private http: HttpClient, public loadingService: LoadingService) { }
    // urlApi = url , uri = url input , data = user import
    private urlApi = "https://elearning0706.cybersoft.edu.vn/api"

    // => listCourse/getlistcourse.service
    // => categoryCourse/categorycourse.service
    // => findlistcourse/findlistcourse.service
    // => infoCourse/infocourse.service
    // => listUser/listuser.service
    // => CourseListCategory/courselistcategory.service
    // => service/editCourseManager/editcoursemanager.service

    getApi<T>(uri: string, options = {} as Options): Observable<T> {
        this.loadingService.show()
        return this.http.get<T>(`${this.urlApi}/${uri}`, options).pipe(tap((data) => {
            console.log(data);
            setTimeout(() => {
                this.loadingService.hidden()
            }, 500);
        }, err => {
            this.loadingService.hidden()
        }), catchError(this.showError))
    }

    // => inforuser/inforuser.service
    // => signinCourse/sigincourse.service
    // => signupCourse/signupcourse.service

    postApi<T>(uri: string, data: any, options = {} as Options): Observable<T> {
        this.loadingService.show()
        return this.http.post<T>(`${this.urlApi}/${uri}`, data, options).pipe(tap((data) => {
            console.log(data);
            setTimeout(() => {
                this.loadingService.hidden()
            }, 500);
        }, err => {
            this.loadingService.hidden()
        }), catchError(this.showError))
    }

    // => registerercourse/registerer.service
    // => service/unsubscribeCourse/unsubscribecourse.service
    // => service/listCourseRegistration/listCourseregistration.service (5 post)
    // => service/addCourse/addcourse.service
    postApiToken<T>(uri: string, data: any, options = {}): Observable<T> {
        this.loadingService.show()
        return this.http.post<T>(`${this.urlApi}/${uri}`, data, options).pipe(tap((data) => {
            console.log(data);
            setTimeout(() => {
                this.loadingService.hidden()
            }, 500);
        }, err => {
            this.loadingService.hidden()
        }), catchError(this.showError))
    }

    // => service/editUserManager/editusermanager.service';
    // => service/editInfoUser/editinfouser.service'
    putApi<T>(uri: string, data: any, options = {} as Options): Observable<T> {
        this.loadingService.show()
        return this.http.put<T>(`${this.urlApi}/${uri}`, data, options).pipe(tap(() => {
            setTimeout(() => {
                this.loadingService.hidden()
            }, 500);
        }, err => {
            this.loadingService.hidden()
        }), catchError(this.showError))
    }

    // => deleteUser/deleteuser.service
    deleteApi<T>(uri: string, options = {}): Observable<T> {
        this.loadingService.show()
        return this.http.delete<T>(`${this.urlApi}/${uri}`, options).pipe(tap(() => {
            setTimeout(() => {
                this.loadingService.hidden()
            }, 500);
        }, err => {
            this.loadingService.hidden()
        }), catchError(this.showError))
    }

    // error
    showError(error: HttpErrorResponse) {
        console.log(error);
        return throwError(error)
    }

}