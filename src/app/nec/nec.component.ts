import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nec',
  templateUrl: './nec.component.html',
  styleUrls: ['./nec.component.css']
})
export class NecComponent implements OnInit{
constructor(private router:Router){}
ngOnInit() {}


onLoginClick(){
  this.router.navigateByUrl('/login');
}

onsigninClick(){
  this.router.navigateByUrl('/signin');
}
}