import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material/material.module';
import { LoadingComponent } from './loading.component';



@NgModule({
  declarations: [
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    LoadingComponent,
  ]
})
export class LoadingModule { }
