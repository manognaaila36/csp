import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MInsertComponent } from './m-insert/m-insert.component';
import { HomeComponent } from './home/home.component';
import { MReadComponent } from './m-read/m-read.component';
import { OurmissionComponent } from './ourmission/ourmission.component';
import { MDeleteComponent } from './m-delete/m-delete.component';
import { MUpdateComponent } from './m-update/m-update.component';
import { CinsertComponent } from './cinsert/cinsert.component';
import { CreadComponent } from './cread/cread.component';
import { CdeleteComponent } from './cdelete/cdelete.component';
import { CupdateComponent } from './cupdate/cupdate.component';
import { ClothInsertComponent } from './cloth-insert/cloth-insert.component';
import { ClothReadComponent } from './cloth-read/cloth-read.component';
import { ClothDeleteComponent } from './cloth-delete/cloth-delete.component';
import { ClothupdateComponent } from './clothupdate/clothupdate.component';
import { NecComponent } from './nec/nec.component';
import { FInsertComponent } from './f-insert/f-insert.component';
import { FReadComponent } from './f-read/f-read.component';
import { FDeleteComponent } from './f-delete/f-delete.component';
import { FUpdateComponent } from './f-update/f-update.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonateComponent } from './donate/donate.component';
import { NrtComponent } from './nrt/nrt.component';
import { MdComponent } from './md/md.component';

@NgModule({
  declarations: [
    AppComponent,
    MInsertComponent,
    HomeComponent,
    MReadComponent,
    OurmissionComponent,
    MDeleteComponent,
    MUpdateComponent,
  
    
        
        
        CinsertComponent,
        CreadComponent,
        CdeleteComponent,
        CupdateComponent,
        ClothInsertComponent,
        ClothReadComponent,
        
        ClothDeleteComponent,
                 ClothupdateComponent,
                 NecComponent,
                 FInsertComponent,
                 FReadComponent,
                 FDeleteComponent,
                 FUpdateComponent,
                 ContactusComponent,
                 LoginComponent,
                 SigninComponent,
                 GalleryComponent,
                 ErrorComponent,
                 DashboardComponent,
                 DonateComponent,
                 NrtComponent,
                 MdComponent,
        
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,

    RouterModule.forRoot([
      {path: '', redirectTo: '/nec', pathMatch: 'full'},
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
