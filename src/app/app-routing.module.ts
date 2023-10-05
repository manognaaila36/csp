import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MInsertComponent } from './m-insert/m-insert.component';
import { HomeComponent } from './home/home.component';
import { MReadComponent } from './m-read/m-read.component';
import { OurmissionComponent } from './ourmission/ourmission.component';
import { MDeleteComponent } from './m-delete/m-delete.component';
import { MUpdateComponent } from './m-update/m-update.component';


import { CreadComponent } from './cread/cread.component';
import { ClothInsertComponent } from './cloth-insert/cloth-insert.component';
import { ClothReadComponent } from './cloth-read/cloth-read.component';
import { ClothDeleteComponent } from './cloth-delete/cloth-delete.component';
import { CupdateComponent } from './cupdate/cupdate.component';
import { CdeleteComponent } from './cdelete/cdelete.component';
import { ClothupdateComponent } from './clothupdate/clothupdate.component';
import { FInsertComponent } from './f-insert/f-insert.component';
import { FReadComponent } from './f-read/f-read.component';
import { FUpdateComponent } from './f-update/f-update.component';
import { NecComponent } from './nec/nec.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { CinsertComponent } from './cinsert/cinsert.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { DonateComponent } from './donate/donate.component';
import { NrtComponent } from './nrt/nrt.component';
import { MdComponent } from './md/md.component';

const routes: Routes = [
  {
    path: "m_insert",
    component: MInsertComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "m_read",
    component: MReadComponent
  },
  {
    path: "ourmission",
    component: OurmissionComponent
  },
  {
    path: "m_delete",
    component: MDeleteComponent
  },
  {
    path: "m_update",
    component: MUpdateComponent
  },
  {
    path: "cinsert",
    component: CinsertComponent
  },
  {
    path: "cread",
    component: CreadComponent
  },
  {
    path: "cloth_insert",
    component: ClothInsertComponent
  },
  {
    path: "cloth_read",
    component: ClothReadComponent
  },
  {
    path: "cloth_delete",
    component: ClothDeleteComponent
  },
  {
    path: "clothupdate",
    component: ClothupdateComponent
  },
  {
    path: "cupdate",
    component: CupdateComponent
  },
  {
    path: "cdelete",
    component: CdeleteComponent
  },
  {
    path: "f_insert",
    component: FInsertComponent
  },
  {
    path: "f_read",
    component: FReadComponent
  },
  {
    path: "f_update",
    component: FUpdateComponent
  },
  {
    path: "nec",
    component: NecComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "gallery",
    component:GalleryComponent
  },
  {
    path: "contactus",
    component: ContactusComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
    path: "error",
    component: ErrorComponent
  },
  {
    path: "donate",
    component: DonateComponent
  },
  {
    path: "nrt",
    component: NrtComponent
  },
  {
    path: "md",
    component: MdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
