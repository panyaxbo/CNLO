import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { Lesson001Component } from './lesson001/lesson001.component';
import { Lesson002Component } from './lesson002/lesson002.component';
import { MainComponent } from './main/main.component';
import { Lesson003Component } from './lesson003/lesson003.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Lesson004Component } from './lesson004/lesson004.component';
import { Lesson005Component } from './lesson005/lesson005.component';
import { Lesson006Component } from './lesson006/lesson006.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson001Component,
    Lesson002Component,
    MainComponent,
    Lesson003Component,
    LeftsideComponent,
    HeaderComponent,
    FooterComponent,
    Lesson004Component,
    Lesson005Component,
    Lesson006Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
