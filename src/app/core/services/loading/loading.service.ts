import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class LoadingService {
    // post data => client/client.component
    public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    public loadingService = this.isLoading.asObservable().pipe(delay(3))

    constructor() { }

    // show + hiden => shared/shareData/shareLoading/shareloading.interceptor
    show() {
        this.isLoading.next(true)
    }
    hidden() {
        this.isLoading.next(false)
    }
}


// => client/components/header/header.component row 99(show) & 109(hiden) & 133(show)
// => client/components/sideheader/sideheader.component row 98(show) & 108(hiden) & 132(show)
// => client/signin/signin.component setTimeout  show & hidden row 47+49
// => client/searchcourse/searchcourse.component setTimeout row 51

