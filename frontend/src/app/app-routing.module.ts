import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PetsComponent } from './components/pets/pets.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';
import { CreatePetsComponent } from './components/create-pets/create-pets.component'
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PqrsComponent } from './components/pqrs/pqrs.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

const routes: Routes = [
  { path:'',
  component:HomeComponent},

  { path:'login',
  component:LoginComponent},

  { path:'pets',
  component:PetsComponent,canActivate:[authGuard]},

  { path:'createpets',
  component:CreatePetsComponent,canActivate:[authGuard]},

  { path:'register',
  component:RegisterComponent},

  { path:'about',
  component:AboutComponent},

  { path:'contact',
  component:ContactComponent},

  { path:'pqrs',
  component:PqrsComponent},

  { path:'privacy',
  component:PrivacyComponent},
  //todas las rutas que no existan
  { path:'**',
  component:PageNotFoundComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
