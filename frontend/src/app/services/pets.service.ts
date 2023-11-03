import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pets } from '../interfaces/schemas';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http:HttpClient) { }

  pets:Pets[]=[]

  selectPet:Pets={
    name:"",
    type:"",
    years:"",
    vaccinated:false
  }

  urlBackend="http://localhost:5000/list"

  createPet(pets:Pets){
    return this.http.post(this.urlBackend,pets)
  }
  readAllPets(){
    return this.http.get<any>(this.urlBackend)
  }
  readPet(){
    console.log('readPet')
  }
  updatePet(pets: Pets) {
    return this.http.put(`${this.urlBackend}/${pets._id}`, pets);
  }

  deletePet(id:string){
    return this.http.delete(`${this.urlBackend}/${id}`)
  }

}
