import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DetailComponent } from './detail/detail.component';
import { IntroComponent } from './home/intro/intro.component';
import { ClientComponent } from './client.component';
import { MaterialModule } from '../core/shared/material/material.module';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './home/slider/slider.component';
import { ListcourseComponent } from './home/listcourse/listcourse.component';
import { SearchcourseComponent } from './searchcourse/searchcourse.component';
import { PipeModule } from '../core/shared/pipe/pipe.module';
import { ModaldetailcourseComponent } from './components/modaldetailcourse/modaldetailcourse.component';
import { ListcoursebycategoryComponent } from './listcoursebycategory/listcoursebycategory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    DetailComponent,
    IntroComponent,
    SliderComponent,
    ListcourseComponent,
    SearchcourseComponent,
    ModaldetailcourseComponent,
    ListcoursebycategoryComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    ComponentsModule,
    FormsModule,
    PipeModule,
    NgxPaginationModule,
    CarouselModule,
  ],
  exports: [
    ClientComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    DetailComponent,
    IntroComponent,
    SliderComponent,
    ListcourseComponent,
    SearchcourseComponent,
    ModaldetailcourseComponent,
    ListcoursebycategoryComponent,
  ]
})
export class ClientModule { }
