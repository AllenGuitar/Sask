import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { PetsService } from '../../services/pets.service'
import { Pets } from '../../interfaces/schemas';
import { Store } from '@ngrx/store';
import * as PetsActions from './../../store/products.actions';
import { AppState } from './../../app.state'; 

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {

  constructor(
    private toastr: ToastrService,
    private jwthelper:JwtHelperService,
    public petservice:PetsService,
    private store: Store<AppState>
  ) {}

  ngOnInit():void{

    this.getAllPets()

  }


  getName(){
    const token:any=localStorage.getItem("token")
    const decoded=this.jwthelper.decodeToken(token)
    return decoded.name
  }

//create pet
  handleSubmitPets(form: NgForm) {
    if (form.value._id) {
      this.petservice.updatePet(form.value).subscribe(
        (res) => {
          form.reset();
          this.getAllPets();
          this.toastr.success('El registro se ha actualizado correctamente', ':)');
        },
        (err) => {
          this.toastr.error(
            'Ha ocurrido un error, intentalo de nuevo mas tarde',
            ':('
          );
        }
      );
    } else {
      if (!form.value.name) {
        this.toastr.info('Ingrese el nombre de la mascota', ':O');
      } else {
        this.petservice.createPet(form.value).subscribe(
          (res) => {
            form.reset();
            this.getAllPets();
            this.toastr.success('El registro se ha creado exitosamente', ':)');
          },
          (err) => {
            this.toastr.error(
              'Ha ocurrido un error, intentalo de nuevo mas tarde',
              ':('
            );
          }
        );
      }
    }
  }

  getAllPets(){
    this.petservice.readAllPets().subscribe(
      (res)=>{
        this.petservice.pets=res.allPets
      },
      (err)=>{
        console.log(err)
      }

    )
  }

editPet(pet:any){
  this.petservice.selectPet=pet
}

removePet(id:string | any){
  this.petservice.deletePet(id).subscribe(
    (res)=>{
      this.getAllPets()
      this.toastr.success('Se ha eliminado el registro',':)')
    },
    (err)=>{
      this.toastr.error('Ha ocurrido un fallo, intentalo nuevamente',':(')
    }

  )
}

addPets(name: string, years: string) {
  console.log('hola')
  const pets: Pets = {name: name, years: years };
  this.store.dispatch(PetsActions.addPets({ pets }));
}

}
