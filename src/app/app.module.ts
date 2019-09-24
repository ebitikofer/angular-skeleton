import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdComponent } from './prod/prod.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { UserStatusComponent } from './user-status/user-status.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdComponent,
    EmployeeComponent,
    UserStatusComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
