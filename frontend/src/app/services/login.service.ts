import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private router:Router) { }
login(user:any){
  return this.http.post<any>("http://3.20.227.54:8080/login",user)
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
