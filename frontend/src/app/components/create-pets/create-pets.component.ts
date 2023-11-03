import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { PetsService } from '../../services/pets.service'

@Component({
  selector: 'app-create-pets',
  templateUrl: './create-pets.component.html',
  styleUrls: ['./create-pets.component.css']
})
export class CreatePetsComponent {
  constructor(
    private toastr: ToastrService,
    private jwthelper:JwtHelperService,
    public petservice:PetsService
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



}
