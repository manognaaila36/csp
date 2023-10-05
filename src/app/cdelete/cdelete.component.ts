import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChaityService } from '../chaity.service';
import { InsertedSuccess, Read, CharityDetails } from '../charity-details';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cdelete',
  templateUrl: './cdelete.component.html',
  styleUrls: ['./cdelete.component.css']
})
export class CdeleteComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  ngOnDestroy(): void{}
  Subscription: Subscription = new Subscription();
  constructor(private Service: ChaityService, private router:Router) {}
  Roll: String = '';
  GotResult: Boolean = false;
  Results = [];
  Read(Roll: String) {
    this.Service.Read(Roll).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
  }
  SuccessMsg = '';
  ErrorMsg = '';
  Delete(Roll: String) {
    this.SuccessMsg = '';
    this.ErrorMsg = '';
    this.Subscription=this.Service.Delete(Roll).subscribe({  

    
      next: (Data:any) => {
        if(Data){
        
          this.SuccessMsg = `Deleted sucessfully`;
        }
        else{
          this.ErrorMsg = ` No record Found`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
 
  }
   
  onHomeClick(){
    this.router.navigateByUrl('/home')
  }
  onOurmissionClick(){
    this.router.navigateByUrl('/ourmission')
  }
  onGalleryClick(){
    this.router.navigateByUrl('/gallery')
  }
  onContactusClick(){
    this.router.navigateByUrl('/contactus')
  }
  onCiClick(){
    this.router.navigateByUrl('/cinsert')
  }
  onCrClick(){
    this.router.navigateByUrl('/cread')
  }
  onCuClick(){
    this.router.navigateByUrl('/cupdate')
  }
  onCdClick(){
    this.router.navigateByUrl('/cdelete')
  }
  onMiClick(){
    this.router.navigateByUrl('/m_insert')
  }
  onMrClick(){
    this.router.navigateByUrl('/m_read')
  }
  onMuClick(){
    this.router.navigateByUrl('/m_update')
  }
  onMdClick(){
    this.router.navigateByUrl('/m_delete')
  }
  onFiClick(){
    this.router.navigateByUrl('/f_insert')
  }
  onFrClick(){
    this.router.navigateByUrl('/f_read')
  }
  onFuClick(){
    this.router.navigateByUrl('/f_update')
  }
  onFdClick(){
    this.router.navigateByUrl('/f_delete')
  }
  onCliClick(){
    this.router.navigateByUrl('/cloth_insert')
  }
  onClrClick(){
    this.router.navigateByUrl('/cloth_read')
  }
  onCluClick(){
    this.router.navigateByUrl('/clothupdate')
  }
  onCldClick(){
    this.router.navigateByUrl('/cloth_delete')
  }
  onloClick(){
    this.router.navigateByUrl('/nec')
  }
} 

