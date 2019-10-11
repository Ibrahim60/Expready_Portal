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

  form: FormGroup;
  formError: any;
  constructor(private fb: FormBuilder,
    private _service: LoginService,
    private route: Router,
    private navUrl: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onsubmit() {
    console.log(this.form.value);
    this._service.login(this.form.value)
      .subscribe((res) => {
        console.log(res);
        this.route.navigate(['dashboard']);
        // localStorage.setItem('form', JSON.stringify(this.form.value));
        // localStorage.setItem("access_token", res.models.access_token);
        // sessionStorage.setItem("access_token", res.models.access_token);
        // console.log("API Response Code : " + res.code);
        // console.log("API Response Message : " + res.message);
        // console.log("API Response Type : " + res.type);
        // console.log("API Response Access Token : " + res.models.access_token);
        // localStorage.removeItem("access_token");
        // let data = sessionStorage.getItem("access_token");
        // localStorage.setItem("access_token", data);
      },
        (err) => {
          this.formError = err;
          console.log(err);
          console.log(err.password);
        });
  }

  signUp() {
    this.route.navigate(['signup']);
  }

}
