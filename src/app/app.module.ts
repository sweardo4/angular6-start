import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { NewComponentComponent } from './new-component/new-component.component';
import { New2Component } from './new2/new2.component';
import { New3Component } from './new3/new3.component';
import { AdminModule } from './admin/admin.module';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    New2Component,
    New3Component,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    
    AdminModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
