import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/schemas';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  users:Users[]=[]

  selectUser:Users={
    name: "",
    email: "",
    password: "",
    address: "",
    pets: false
}

  urlBackend=environment.apiUrl + '/users'

  createUser(users:Users){
    return this.http.post(this.urlBackend,users)
  }
  readUser(){
    console.log('readPet')
  }
  updateUser(users: Users) {
    return this.http.put(`${this.urlBackend}/${users._id}`, users);
  }

  deleteUser(id:string){
    return this.http.delete(`${this.urlBackend}/${id}`)
  }

}
