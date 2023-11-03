import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private toastr: ToastrService,
    private jwthelper:JwtHelperService,
    public userservice:UsersService
  ) {}

  ngOnInit():void{


  }



//create pet
  createUser(form: NgForm) {
 
      if (!form.value.email) {
        this.toastr.info('Ingrese el correo', ':O');
      } else {
        this.userservice.createUser(form.value).subscribe(
          (res) => {
            form.reset();
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
