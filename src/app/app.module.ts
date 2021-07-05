import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/guards/jwt/jwt.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ShareloadingInterceptor } from '@shared/shareData/shareLoading/shareloading.interceptor';
import { LoadingModule } from './loading/loading.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, // call api
    AppRoutingModule, // routing component
    LoadingModule,
    // service worker ?
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    //  => interceptor core/guard/jwt/jwt.interceptor.ts
    //  => interceptor shared/shareData/shareLoading/shareloading.interceptor
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },// accessToken
    { provide: HTTP_INTERCEPTORS, useClass: ShareloadingInterceptor, multi: true }, // loading
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
