import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://api-dev2.ziggyjobs.com/v1/users/login';


  constructor(private http : HttpClient) { }

  login(data): Observable<any>{
    localStorage.setItem('form', JSON.stringify(data));
    localStorage.setItem("accessToken", Response.accessToken);
    return this.http.post<any>(this.apiUrl, data);
  };

}
