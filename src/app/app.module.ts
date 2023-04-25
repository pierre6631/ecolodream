import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EcoloComponent } from './ecolo/ecolo.component';
import { SharedModule } from './shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavUserConnectedComponent } from './header/nav-user-connected/nav-user-connected.component';
import { PrimaryNavComponent } from './header/primary-nav/primary-nav.component';
import { NavUserNotConnectedComponent } from './header/nav-user-not-connected/nav-user-not-connected.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EcoloComponent,
    RegisterComponent,
    NavUserConnectedComponent,
    PrimaryNavComponent,
    NavUserNotConnectedComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
