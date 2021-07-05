import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UpdatecoursemanagerComponent } from 'src/app/admin/course-management/updatecoursemanager/updatecoursemanager.component';

@Injectable({
  providedIn: 'root'
})
// import CandeactivateadduserGuard admin/admin-routing.module.ts row 24
export class CandeactivateupdatecourseGuard implements CanDeactivate<UpdatecoursemanagerComponent> {
  // admin/updatecoursemanager/updatecoursemanager.component
  canDeactivate(updateCourseManagerComponent: UpdatecoursemanagerComponent) {
    const isDirty = updateCourseManagerComponent.formUpdateCourse?.dirty
    if (isDirty) {
      return window.confirm("Are You Leave !")
    }
    return true
  }
}
