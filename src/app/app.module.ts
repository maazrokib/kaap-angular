import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './auth/navbar/navbar.component';
import { HomeComponent } from './auth/home/home.component';
import { MyproductComponent } from './auth/myproduct/myproduct.component';
import { PCetegoryComponent } from './auth/p-cetegory/p-cetegory.component';
import { GelleryComponent } from './auth/gellery/gellery.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    MyproductComponent,
    PCetegoryComponent,
    GelleryComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
