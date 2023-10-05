
import { Component } from '@angular/core';
import { FcrudService } from '../fcrud.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { InsertedSuccess, Read, Food,UniqueConstraintError, } from '../donation';

@Component({
  selector: 'app-f-update',
  templateUrl: './f-update.component.html',
  styleUrls: ['./f-update.component.css']
})
export class FUpdateComponent {
  ngOnInit(): void {}
  Subscription: Subscription = new Subscription();
  constructor(private Service: FcrudService, private router:Router) {}
  Roll: String = '';
  GotResult: Boolean = false;
  SuccessMsg = '';
  ErrorMsg = '';
  canShow:boolean=false;
  retrive:boolean=false;
  clicked:boolean=false;
  
  User: Food= {
    s_no : '',
    name: '',
    contact_no: '',
    charity_name: '',
    
    dd: ''
  };
  
  Results = [];
 
  a=[];

  Read(){
    this.clicked=true;
   
    this.Subscription=this.Service.Read(this.User.s_no).subscribe(
      (data:any)=>{
        if(data){
          this.canShow=true;
          this.a=data.Result[0];
          this.retrive=true;
         
          this.User = {
            s_no:this.a[0] ,
            name:this.a[1],
            contact_no:this.a[2],
            charity_name:this.a[3],
            
            dd:this.a[4],
            
          
            };
            }
        else{
       alert("can't update");
        }
      }
    )
}
Update(){
  this.ErrorMsg='';
  this.SuccessMsg='';
  this.Subscription=this.Service.Update(this.User.s_no,this.User).subscribe(
    (data:any)=>{
      if(data){
      
        this.SuccessMsg = `${this.User.s_no} updated sucessfully`;
      }
      else{
        this.ErrorMsg = `${this.User.s_no} No record Found`;
      }

    }
  )}

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


