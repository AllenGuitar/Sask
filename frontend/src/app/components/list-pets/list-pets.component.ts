import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Pets } from '../../interfaces/schemas';
import { AppState } from './../../app.state';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent implements OnInit{

  pets:Pets[]=[]

  constructor(
    private store:Store<AppState>
  ){}

  ngOnInit(){
      this.store.pipe(select('products')).subscribe((pets:Pets[])=>{
        console.log(pets)
        this.pets=pets
      })
  }


}