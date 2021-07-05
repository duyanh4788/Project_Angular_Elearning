import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { MaterialModule } from '../core/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdduserComponent } from './modalusermanager/adduser/adduser.component';
import { ModalusermanagerComponent } from './modalusermanager/modalusermanager.component';
import { UpdateuserComponent } from './modalusermanager/updateuser/updateuser.component';
import { UserregisterComponent } from './modalusermanager/userregister/userregister.component';
import { PipeModule } from '@shared/pipe/pipe.module';
import { InfoadminComponent } from './infoadmin/infoadmin.component';
import { ModalcoursemanagerComponent } from './modalcoursemanager/modalcoursemanager.component';
import { ListuserunregisterdComponent } from './modalcoursemanager/listuserunregisterd/listuserunregisterd.component';
import { ListuserwaitapprovalComponent } from './modalcoursemanager/listuserwaitapproval/listuserwaitapproval.component';
import { ListuserapprovalComponent } from './modalcoursemanager/listuserapproval/listuserapproval.component';
import { AddcoursemanagerComponent } from './course-management/addcoursemanager/addcoursemanager.component';
import { UpdatecoursemanagerComponent } from './course-management/updatecoursemanager/updatecoursemanager.component';

@NgModule({
  declarations: [
    AdminComponent,
    UserManagementComponent,
    CourseManagementComponent,
    AdduserComponent,
    ModalusermanagerComponent,
    UpdateuserComponent,
    UserregisterComponent,
    InfoadminComponent,
    ModalcoursemanagerComponent,
    ListuserunregisterdComponent,
    ListuserwaitapprovalComponent,
    ListuserapprovalComponent,
    AddcoursemanagerComponent,
    UpdatecoursemanagerComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    PipeModule,
  ],
  exports: [
    AdminComponent,
    UserManagementComponent,
    CourseManagementComponent,
    AdduserComponent,
    ModalusermanagerComponent,
    UpdateuserComponent,
    UserregisterComponent,
    InfoadminComponent,
    ModalcoursemanagerComponent,
    ListuserunregisterdComponent,
    ListuserwaitapprovalComponent,
    ListuserapprovalComponent,
    AddcoursemanagerComponent,
    UpdatecoursemanagerComponent,
  ]
})
export class AdminModule { }
