import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Pets } from '../../interfaces/schemas';
import { AppState } from './../../app.state';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit{

  pets:Pets[]=[]

  constructor(
    private store:Store<AppState>
  ){}

  ngOnInit(){
      this.store.pipe(select('pets')).subscribe((pets:Pets[])=>{
        console.log(pets)
        this.pets=pets
      })
  }


}