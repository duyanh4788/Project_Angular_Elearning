import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { SignupComponent } from 'src/app/client/signup/signup.component';

@Injectable({
  providedIn: 'root'
})
// import CandeactivateSignUpGuard client/client-routing.module.ts row 23
export class CandeactivateSignUpGuard implements CanDeactivate<SignupComponent> {
  // sử dụng cho client/sigup/signup.component.ts
  canDeactivate(component: SignupComponent) {
    const isDirty = component.formSignUp?.dirty
    if (isDirty) {
      return window.confirm(" Are You Leave ! ")
    }
    return true
  }
}
