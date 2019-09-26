import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { LoginService } from "./login.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form : FormGroup;
  constructor(private fb : FormBuilder,
    private _service : LoginService,
    private route : Router,
    private navUrl : ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onsubmit(){
    console.log(this.form.value);
    this._service.login(this.form.value)
    .subscribe((res)=>{
      console.log(res)
    });
  }

}
