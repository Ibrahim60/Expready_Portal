import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://api-dev2.ziggyjobs.com/v1/users/login';


  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    console.log(data);
    return this.http.post<any>(this.apiUrl, data)
      .pipe(
        map(((resp: any) => {
          console.log(resp);
          localStorage.setItem('access_token', resp.models.access_token);
          return resp.models;
        })),
        catchError((errorResponce: HttpErrorResponse) => {
          // console.log(errorResponce.error);
          // console.log(errorResponce.error.code);
          // console.log(errorResponce.error.message);
          // if (errorResponce.error.models.form.password[0]) {
          //   console.log(errorResponce.error.models.form.password[0]);
          // } else if (errorResponce.error.models.form.email[0]) {
          //   console.log(errorResponce.error.models.form.email[0]);
          // } else {
          //   console.log(errorResponce.error.models.form.email[0]);
          // }
          throw (errorResponce.error.models.form);
        })
      );
  }

}
