import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users.component';

import { PossessionsService } from './possessions.service';
import { UserService } from './user.service';
import { BillsComponent } from './bills.component';
import { BillsService } from './bills.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PossessionsService, UserService, BillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
