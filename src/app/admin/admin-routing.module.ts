import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/authadmin/auth.guard';
import { CandeactivateadduserGuard } from '../core/guards/candeactivate_addUser/candeactivateadduser.guard';
import { AdduserComponent } from './modalusermanager/adduser/adduser.component';
import { AdminComponent } from './admin.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { InfoadminComponent } from './infoadmin/infoadmin.component';
import { AddcoursemanagerComponent } from './course-management/addcoursemanager/addcoursemanager.component';
import { UpdatecoursemanagerComponent } from './course-management/updatecoursemanager/updatecoursemanager.component';
import { CandeactivateaddcourseGuard } from '../core/guards/candeactivate_addCourse/candeactivateaddcourse.guard';
import { CandeactivateupdatecourseGuard } from '../core/guards/candeactivate_updateCourse/candeactivateupdatecourse.guard';

const routes: Routes = [
  {
    path: '', component: AdminComponent, canActivate: [AuthGuard], children: [ // canActivate: [AuthGuard] export từ core/guard/auth.guard.ts
      { path: '', component: InfoadminComponent },// infor admin
      { path: 'infoadmin', component: InfoadminComponent },// infor admin
      { path: 'user', component: UserManagementComponent }, // user manager
      { path: 'course', component: CourseManagementComponent }, // course manager
      { path: 'addCourse', component: AddcoursemanagerComponent, canDeactivate: [CandeactivateaddcourseGuard] },
      { path: 'updateCourse', component: UpdatecoursemanagerComponent, canDeactivate: [CandeactivateupdatecourseGuard]},
      { path: 'adduser', component: AdduserComponent, canDeactivate: [CandeactivateadduserGuard] },// chặn rời trang
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
