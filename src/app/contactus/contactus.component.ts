import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit() {}

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


