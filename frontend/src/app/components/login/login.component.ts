import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //two ways binding - ligar los datos de ts con html

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
    private jwthelper:JwtHelperService
  ) {}

  user = {
    email: '',
    password: '',
  };

  login() {
    if (!this.user.email || !this.user.password) {
      this.toastr.error('Por favor diligenciar todos los datos', 'Error');
    } else {
      this.loginService.login(this.user).subscribe(
        (res) => {
          if (res.token) {
            const decoded=this.jwthelper.decodeToken(res.token)
            localStorage.setItem('token', res.token);
            this.router.navigate(['/pets']);
            this.toastr.success(decoded.name, 'Bienvenido');
          }else{
            this.toastr.warning(`${res.msg}`, 'Error');
          }
        },
        (err) => {
          this.toastr.error('La información ingresada es incorrecta', 'Error');
        }
      );
    }
  }
}
