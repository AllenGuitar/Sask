import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private router:Router) { }
login(user:any){
  return this.http.post<any>(environment.apiUrl + '/login', user)
}

isLogOrNot(){
  if (localStorage.getItem("token")) {
    return true
  } else {
    return false
  }
}


endsession(){
  localStorage.removeItem("token")
  this.router.navigate(['/login'])
}

}
