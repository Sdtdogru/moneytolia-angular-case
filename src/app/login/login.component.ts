import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { LocalStorageService } from '../service/local-storage-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   userName = this.storeg.getItem("userName");
   password = this.storeg.getItem("pass")
  constructor( private router: Router,private storeg:LocalStorageService) { }

  ngOnInit(): void {
  }
  login(data:NgForm){
    if(data.value.Uname==this.userName&&data.value.Pass==this.password){
      this.storeg.setItem('session', 'true');
      this.router.navigate(['/kampanya-listesi']);
    }else{
      this.storeg.setItem('session', 'false');
    }
  }

}
