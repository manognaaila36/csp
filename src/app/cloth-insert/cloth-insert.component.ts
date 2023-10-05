import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Cloth,
  UniqueConstraintError,
} from '../cloth';
import { Subscription } from 'rxjs';
import { ClothService } from '../cloth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cloth-insert',
  templateUrl: './cloth-insert.component.html',
  styleUrls: ['./cloth-insert.component.css']
})
export class ClothInsertComponent implements OnInit, OnDestroy {
  constructor(private Service: ClothService, private router:Router) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Cloth = {
    s_no: '',
    name: '',
    contact_no: '',
    charity_name:'',
    total_clothes:'',
    dd:'',
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    //   this.Subscription = this.Service.Insert(this.User).subscribe(
    //     (data)=>{
    //       if(data){
    //         console.log(data);
    //       }
    //       else{
    //         console.log("Failed");
    //       }
    //     }
    //   )
    // }

    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.s_no} alredy Exists`;
        } else {
          this.SuccessMsg = `You Donated Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  
  ngOnDestroy() {
    this.Subscription.unsubscribe();
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
    this.router.navigateByUrl('/cloth_read');
  }
  onCluClick(){
    this.router.navigateByUrl('/clothupdate');
  }
  onCldClick(){
    this.router.navigateByUrl('/cloth_delete');
  }
  onloClick(){
    this.router.navigateByUrl('/nec')
  }
} 


  





