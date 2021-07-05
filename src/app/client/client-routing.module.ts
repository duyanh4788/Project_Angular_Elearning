import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfouserComponent } from './components/infouser/infouser.component';
import { AuthinfouserGuard } from '../core/guards/authInforUser/authinfouser.guard';
import { CandeactivateSignUpGuard } from '../core/guards/candeactive_signUp/candeactivatesignup.guard';
import { ClientComponent } from './client.component';
import { DetailComponent } from './detail/detail.component';
import { SearchcourseComponent } from './searchcourse/searchcourse.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './home/intro/intro.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ListcoursebycategoryComponent } from './listcoursebycategory/listcoursebycategory.component';

const routes: Routes = [
  {
    path: '', component: ClientComponent,// default component home
    children: [
      { path: '', component: HomeComponent },// default component home
      { path: 'fincourse', component: SearchcourseComponent },
      { path: 'detail-course/:maKhoaHoc', component: DetailComponent }, // khai báo :maKhoaHoc để nhận giá trị từ client/home/listcourse/listcourse.component.html row 21
      { path: 'category-course/:maDanhMuc', component: ListcoursebycategoryComponent }, // khai báo :maKhoaHoc để nhận giá trị từ client/home/listcourse/listcourse.component.html row 21
      { path: 'intro', component: IntroComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent, canDeactivate: [CandeactivateSignUpGuard] },
      { path: 'infoUser', component: InfouserComponent, canActivate: [AuthinfouserGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
