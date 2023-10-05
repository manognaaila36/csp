import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Sign,
  UniqueConstraintError,
} from '../donation';
import { Subscription } from 'rxjs';
import { SignService } from '../sign.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private Service: SignService,private router:Router){}
  ngOnInit() {}


  Subscription: Subscription = new Subscription();
  User:Sign = {
    name : '',
    ph: '',
    email: '',
    p:'',
    cp:''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.email} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.email} Registered Succesfully`;
        }
      },
      error: (Error:any) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }


  onLoginClick(){
    this.router.navigateByUrl('/login');
  }  


  RegForm= new FormGroup({
    user:new FormControl('',[Validators.required]),
    contact_no:new FormControl('',[Validators.required,Validators.pattern('[0-9]{10,10}')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(7)]),
    repassword:new FormControl('',[Validators.required,Validators.minLength(7)]),
  
  })
  ReginUser()
  {
    console.warn(this.RegForm.value)
  }
get user()
{
  return this.RegForm.get('user');
}
get password()
{
  return this.RegForm.get('password');
}
get contact_no()
{
  return this.RegForm.get('contact_no');
}
get email()
{
  return this.RegForm.get('email');
}
get repassword()
{
  return this.RegForm.get('repassword');
}

}

