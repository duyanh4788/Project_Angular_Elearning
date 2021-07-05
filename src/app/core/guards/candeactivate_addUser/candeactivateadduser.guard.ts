import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AdduserComponent } from 'src/app/admin/modalusermanager/adduser/adduser.component';

@Injectable({
  providedIn: 'root'
})
// import CandeactivateadduserGuard admin/admin-routing.module.ts row 22
export class CandeactivateadduserGuard implements CanDeactivate<AdduserComponent> {
  // admin/modalusermanager/adduser/adduser.component
  canDeactivate(adduserComponent: AdduserComponent) {
    const isDirty = adduserComponent.formAddUser?.dirty
    if (isDirty) {
      return window.confirm("Are You Leave !")
    }
    return true
  }
}
