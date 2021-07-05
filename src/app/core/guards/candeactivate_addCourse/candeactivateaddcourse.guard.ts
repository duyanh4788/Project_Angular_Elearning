import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddcoursemanagerComponent } from 'src/app/admin/course-management/addcoursemanager/addcoursemanager.component';

@Injectable({
  providedIn: 'root'
})
// import CandeactivateadduserGuard admin/admin-routing.module.ts row 15
export class CandeactivateaddcourseGuard implements CanDeactivate<AddcoursemanagerComponent> {
  // admin/addcoursemanager/addcoursemanager.component
  canDeactivate(addCoursemanagerComponent: AddcoursemanagerComponent) {
    const isDirty = addCoursemanagerComponent.formAddCoure?.dirty
    if (isDirty) {
      return window.confirm("Are You Leave !")
    }
    return true
  }

}
