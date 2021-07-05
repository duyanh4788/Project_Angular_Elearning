import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../../core/shared/material/material.module';
import { ClientRoutingModule } from '../client-routing.module';
import { InfouserComponent } from './infouser/infouser.component';
import { SideheaderComponent } from './sideheader/sideheader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalinfouserComponent } from './modalinfouser/modalinfouser.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InfouserComponent,
    SideheaderComponent,
    ModalinfouserComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    InfouserComponent,
    SideheaderComponent,
    ModalinfouserComponent,
  ]
})
export class ComponentsModule { }
