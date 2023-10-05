import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { SignService } from '../sign.service';
import { Sign } from '../donation';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private signService:SignService,private router:Router){}
  
  

  ngOnInit() :void {
    this.Read('');
  }
  Roll: String = '';
  GotResult: Boolean = false;
  Results = [];

  Read(Roll: String) {
    this.signService.Read(Roll).subscribe({
      next: (Data: any) => {
        this.Results = Data.Result;
        this.GotResult = true;
        if (this.Results.length > 0) {
          this.router.navigate(['/home']); // Navigate to next component if data exists
        } 
      },
      
      error: (Err:any) => {
        console.log(Err);
      },
    });
}
  

  onHomeClick(){
    this.router.navigateByUrl('/home')
  }
  loginForm= new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(7)]),
  })
  loginUser()
  {
    console.warn(this.loginForm.value)
  }
get user()
{
  return this.loginForm.get('user');
}
get password()
{
  return this.loginForm.get('password');
}


}