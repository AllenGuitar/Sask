import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PetsComponent } from './components/pets/pets.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopComponent } from './components/top/top.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { CreatePetsComponent } from './components/create-pets/create-pets.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PqrsComponent } from './components/pqrs/pqrs.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ListPetsComponent } from './components/list-pets/list-pets.component';
import { StoreModule } from '@ngrx/store';
import { petsReducer } from './store/products.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PetsComponent,
    PageNotFoundComponent,
    TopComponent,
    BottomComponent,
    TopHeaderComponent,
    CreatePetsComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    PqrsComponent,
    PrivacyComponent,
    ListPetsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({pets:petsReducer}),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: ()=>localStorage.getItem("token"),
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
