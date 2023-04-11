import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' ;

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { ContaService } from './services/conta.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteService } from './services/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [ContaService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
