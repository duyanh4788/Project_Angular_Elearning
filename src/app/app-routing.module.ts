import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminModule } from './admin/admin.module';
// import { ClientModule } from './client/client.module';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule) },
  { path: '', loadChildren: () => import('./client/client.module').then(module => module.ClientModule) },// default component home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
